import React, { Fragment, useState, useEffect } from 'react';

import { Card, CardContent, Typography, IconButton, Icon, Grid, TextField, Button, Paper } from '@material-ui/core';
import { Table, TableBody, TableHead, TableCell, TableRow } from '@material-ui/core';

import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import PostAddIcon from '@material-ui/icons/PostAdd';


import { Link } from 'react-router-dom';
function ProductBacklogItem(props) {

    /**
     * React State variables, and setter functions
     */
    const [editable, setEditable] = useState(false);
    const [editableTask, setEditableTask] = useState(false);
    const [tasks, taskToState] = useState([])
    const [currentId, setID] = useState(props.pbiData.id);
    const [currentName, setName] = useState(props.pbiData.name);
    const [currentDesc, setDesc] = useState(props.pbiData.desc);
    const [currentCost, setCost] = useState(props.pbiData.story_pts);
    const [taskName, setTaskName] = useState([]);
    // const [currentStatus, setStatus] = useState(props.pbiData.story_pts);


    function moveToSprint(PBIdata) {
        fetch("api/pbisinsprint/", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(PBIdata)
        })

            .then(response => response)
            .then(response => console.log(response))
    }


    function getTasks() {
        fetch("api/tasks/")

            .then(response => {

                if (response.status != 200) {
                    console.log("Something went wrong!");
                }

                return response.json()
            })

            .then(data => {
                taskToState(data);
            });

    }

    function deletePBI(id) {
        fetch("api/pbis/" + id, {
            method: "DELETE",
            cache: "no-cache",
        })
            .then(response => response)
            .then(response => console.log(response))
            .then(response => getTasks());
    }
    useEffect(() => {

        getTasks();

    }, []);
    // TODO: DO PRIORITY SORTING
    return (
        <TableBody>
            <TableRow>
                <TableCell align="center">
                    <TextField
                        value={currentId}
                        disabled={!editable}

                    />
                </TableCell>
                <TableCell align="center">
                    <TextField
                        value={currentName}
                        disabled={!editable}
                        onChange={(event) => {
                            setName(event.target.value)
                        }}
                    />
                </TableCell>
                <TableCell align="center">
                    <TextField
                        type="number"
                        value={currentCost}
                        disabled={!editable}
                        onChange={(event) => {
                            setCost(event.target.value)
                        }}
                    />
                </TableCell>
                <TableCell align="center">
                    <TextField
                        value={currentDesc}
                        disabled={!editable}
                        onChange={(event) => {
                            setDesc(event.target.value)
                        }}
                    />
                </TableCell>
                <TableCell align="center">
                    <IconButton
                        disableFocusRipple
                        disabled={editable}
                        size="small"
                        onClick={() => {
                            setEditable(true)
                        }}
                    >
                        <Icon><Edit /></Icon>
                    </IconButton>
                </TableCell>

                <TableCell align="center">
                    <IconButton
                        disabled={!editable}
                        onClick={() => {
                            setEditable(false)
                            props.editPBI({
                                ...props.pbiData,
                                name: currentName,
                                story_pts: currentCost,
                                desc: currentDesc
                            })
                        }}
                    >
                        <Icon><SaveIcon /></Icon>
                    </IconButton>
                </TableCell>
                <TableCell align="center">
                    <IconButton size="small" onClick={() => {
                        moveToSprint({
                            pbi_id: currentId,
                            sprint_id: 1
                        })
                    }}>
                        <Icon><PostAddIcon /></Icon>
                    </IconButton>
                </TableCell>
                <TableCell>
                    <IconButton size="small"
                        disableFocusRipple
                        onClick={() => {
                            deletePBI(currentId)
                            window.location.reload()
                        }}
                    >
                        <Icon>
                            <Delete />
                        </Icon>
                    </IconButton>
                </TableCell>
            </TableRow>
        </TableBody>
    );
}
export default ProductBacklogItem;