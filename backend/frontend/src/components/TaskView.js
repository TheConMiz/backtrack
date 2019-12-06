import React, { useState, useEffect, Fragment } from 'react';

import { Dialog, DialogTitle, Typography, DialogActions, DialogContent, TextField, Button, Grid } from '@material-ui/core';
import { Table, TableCell, TableHead, TableRow, TableBody } from '@material-ui/core';

function TaskView(props) {

    const [tasks, taskToState] = useState([])

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
    function deleteTask(taskid) {
        fetch("api/tasks/" + taskid, {
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



    return (
        <Fragment>
            <Dialog
                open={props.openDialog}
                onClose={() => {

                    props.setDialog(false);

                }}
                disableBackdropClick
                disableEscapeKeyDown
            >
                <DialogTitle>
                    {"Tasks"}
                </DialogTitle>

                <DialogContent>



                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">
                                    <Typography variant="h5">Name</Typography>
                                </TableCell>
                                <TableCell align="center">
                                    <Typography variant="h5">Desc</Typography>
                                </TableCell>
                                <TableCell align="center">
                                    <Typography variant="h5">status</Typography>
                                </TableCell>
                                <TableCell align="center">
                                    <Typography variant="h5">Delete</Typography>
                                </TableCell>

                            </TableRow>
                        </TableHead>


                        <TableBody>
                            {tasks.map((item) => {


                                return (

                                    <TableRow>
                                        <TableCell>{item.name}</TableCell>
                                        <TableCell>{item.desc}</TableCell>
                                        <TableCell>{item.status}</TableCell>
                                        <TableCell><Button onClick={() => {
                                            deleteTask(item.id)
                                        }}>Delete</Button></TableCell>
                                    </TableRow>
                                );

                            })}


                        </TableBody>
                    </Table>

                </DialogContent>

                <DialogActions>


                    <Button
                        onClick={() => {

                            props.setDialog(false);
                        }}
                    >
                        close
                    </Button>

                </DialogActions>
            </Dialog>
        </Fragment >
    );
}

export default TaskView;