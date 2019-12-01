import React, { Fragment, useState, useEffect } from 'react';
import { Grid, Typography, Paper, Button, Table, TableCell, TableHead, TableRow, Icon, IconButton } from '@material-ui/core';

import ProjectBoardItem from './ProjectBoardItem';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
export default function ProjectBoard() {

    const [tasks, taskToState] = useState([]);
    const [PBIsInSprint, setPBIsInSprint] = useState([]);
    const [pbiIds, setPBIIds] = useState([]);
  

    /**
     * Function for making a GET request for the PBIs in Sprint
     */
   
    function getPBIIDs() {
        var completeData = []
        fetch("api/pbisinsprint/")

            .then(response => {

                if (response.status != 200) {
                    console.log("Something went wrong!");
                }

                return response.json()

            })

            .then(data => {
                setPBIIds(data);
                data.map((item) => {
                    console.log("looop");
                    console.log(item);

                    fetch("api/pbis/" + item.pbi_id)

                        .then(response => {

                            if (response.status != 200) {
                                console.log("Something went wrong!");
                            }

                            return response.json()
                        })

                        .then(data2 => {
                            console.log("data2");
                            console.log(data2);
                            completeData = completeData.concat(data2);
                            console.log("complete");
                            console.log(completeData);

                            setPBIsInSprint(completeData);

                        });

                });
            })
    }


    function getTasks() {
        fetch("api/tasks/")

            .then(response => {

                if (response.status != 200) {
                    console.log("Something went wrong!");
                }

                return response.json()
            })

            .then(response => {
                taskToState(response);
            });
    }



    function setStatus(newPBI) {
        fetch("api/pbis/" + newPBI.id + "/", {
            method: "PATCH",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPBI)
        })

            .then(response => response)
            .then(response => console.log(response))
            .then(response => getTasks())
    }

    useEffect(() => {

        getPBIIDs();
    }, []);

    console.log(PBIsInSprint);

    return (
        <Fragment>
            <IconButton size="large" component={Link} to="/homepage">
                <Icon><HomeIcon /></Icon>
            </IconButton>
            <br></br>

            <Typography variant="h4" align="center">
                Sprint Backlog
            </Typography>
            <br></br>

            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">
                            <Typography variant="h5">To-Do</Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography variant="h5">In Progress</Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography variant="h5">Completed</Typography>
                        </TableCell>

                    </TableRow>
                </TableHead>

                <TableCell>
                    <Paper
                        square
                    >

                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left"></TableCell>
                                    <TableCell align="left">ID</TableCell>
                                    <TableCell align="left">Name</TableCell>
                                    <TableCell align="left">Description</TableCell>
                                    <TableCell align="left">Tasks</TableCell>
                                    <TableCell align="left"></TableCell>
                                </TableRow>
                            </TableHead>

                            {PBIsInSprint.map((item, index) => {

                                if (item.status === 1) {
                                    return (
                                        <ProjectBoardItem pbiData={item} setStatus={setStatus} />
                                    );
                                }

                            })}
                        </Table>


                    </Paper>
                </TableCell>

                <TableCell>
                    <Paper
                        square
                    >

                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left"></TableCell>
                                    <TableCell align="left">ID</TableCell>
                                    <TableCell align="left">Name</TableCell>
                                    <TableCell align="left">Description</TableCell>
                                    <TableCell align="left">Tasks</TableCell>
                                    <TableCell align="left"></TableCell>
                                </TableRow>
                            </TableHead>

                            {PBIsInSprint.map((item, index) => {

                                if (item.status === 2) {
                                    return (
                                        <ProjectBoardItem pbiData={item} setStatus={setStatus} />
                                    );
                                }

                            })}
                        </Table>


                    </Paper>
                </TableCell>
                <TableCell>
                    <Paper
                        square
                    >

                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left"></TableCell>
                                    <TableCell align="left">ID</TableCell>
                                    <TableCell align="left">Name</TableCell>
                                    <TableCell align="left">Description</TableCell>
                                    <TableCell align="left">Tasks</TableCell>
                                    <TableCell align="left"></TableCell>
                                </TableRow>
                            </TableHead>

                            {PBIsInSprint.map((item, index) => {

                                if (item.status === 3) {
                                    return (
                                        <ProjectBoardItem pbiData={item} setStatus={setStatus} />
                                    );
                                }

                            })}
                        </Table>

                    </Paper>
                </TableCell>

            </Table>
        </Fragment>
    );

}
