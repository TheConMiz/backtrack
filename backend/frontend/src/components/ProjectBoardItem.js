import React, { useState, Fragment } from 'react';

import { Button, IconButton, Typography, Paper, Grid, Menu, Icon, MenuItem, TextField, Table, TableRow, TableCell, TableBody } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router";

import LeftArrow from '@material-ui/icons/ArrowBack';
import RightArrow from '@material-ui/icons/ArrowForward';
import VisibilityIcon from '@material-ui/icons/Visibility';
import TaskView from './TaskView'



function ProjectBoardItem(props) {
    const [taskDialog, setTaskDialog] = useState(false);


    return (
        <TableBody> 
            <TaskView openDialog={taskDialog} setDialog={setTaskDialog} />
            
            <TableRow>
                <TableCell>
                    <IconButton
                        disableFocusRipple
                        disabled={props.pbiData.status === 1 ? true : false}
                        onClick={() => {
                            props.setStatus({
                                ...props.pbiData,
                                status: props.pbiData.status - 1
                            })
                            window.location.reload();
                        }}

                    >
                        <Icon>
                            <LeftArrow />
                        </Icon>
                    </IconButton>
                </TableCell>

                <TableCell >
                    {props.pbiData.id}
                </TableCell>

                <TableCell>
                    {props.pbiData.name}
                </TableCell>

                <TableCell>
                    {props.pbiData.desc}
                </TableCell>

                <TableCell>


                    <IconButton
                        disableFocusRipple
                        onClick={() => {
                            setTaskDialog(true);
                        }}
                        disableFocusRipple
                    >
                        <Icon>
                            <VisibilityIcon />
                        </Icon>
                    </IconButton>

                </TableCell>

                <TableCell>
                    <IconButton
                        disableFocusRipple
                        disabled={props.pbiData.status === 3 ? true : false}
                        onClick={() => {
                            props.setStatus({
                                ...props.pbiData,
                                status: props.pbiData.status + 1
                            })
                            window.location.reload();
                        }}
                    >
                        <Icon>
                            <RightArrow />
                        </Icon>
                    </IconButton>
                </TableCell>

            </TableRow>
        </TableBody>

    );

}

export default ProjectBoardItem;