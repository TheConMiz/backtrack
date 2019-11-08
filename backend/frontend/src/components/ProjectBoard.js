import React, { Fragment, useState, useEffect } from 'react';
import { Grid, Typography, Paper, Button } from '@material-ui/core';

import ProjectBoardItem from './ProjectBoardItem';

export default function ProjectBoard() {
    
    const [tasks, taskToState] = useState([]);


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

    function setStatus(newTask) {
        fetch("api/tasks/" + newTask.task_id + "/", {
            method: "PATCH",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTask)
        })
            
            .then(response=> response)
            .then(response => console.log(response))
            .then(response => getTasks())
    }

    useEffect(() => {
        getTasks();
    }, []);

    console.log(tasks)

    return (
        <Fragment>
            <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="flex-start"
            >
                
                <Grid item>
                    <Paper
                        square
                    >
                        <Grid container direction="column" justify="space-evenly">
                            
                            <Grid item>
                                <Typography variant="h5">
                                    To-Do
                                </Typography>
                            </Grid>

                            {tasks.map((item, index) => {

                                if (item.status === 1) {
                                    return (
                                        <Grid item>
                                            <ProjectBoardItem taskData={item} setStatus={setStatus}/>
                                        </Grid>
                                    
                                    );
                                }
                                
                            })}
                            
                        </Grid>
                    </Paper>
                </Grid>

                <Grid item>
                    <Paper
                        square
                    >
                        <Grid container direction="column" justify="space-evenly" spacing={2}>

                            <Grid item>
                                <Typography variant="h5">
                                    In Progress
                                </Typography>
                            </Grid>

                            {tasks.map((item, index) => {

                                if (item.status === 2) {
                                    return (
                                        <Grid item>
                                            <ProjectBoardItem taskData={item} setStatus={setStatus}/>
                                        </Grid>
                                    
                                    );
                                }
                                
                            })}
                            
                        </Grid>
                    </Paper>
                </Grid>

                <Grid item>
                    <Paper
                        square
                    >
                        <Grid container direction="column" justify="space-evenly" spacing={2}>
                            <Typography variant="h5">
                                Under Review
                            </Typography>

                            {tasks.map((item, index) => {

                                if (item.status === 3) {
                                    return (
                                        <Grid item>
                                            <ProjectBoardItem taskData={item} setStatus={setStatus}/>
                                        </Grid>
                                    
                                    );
                                }
                                
                            })}
                            
                        </Grid>
                    </Paper>
                </Grid>

                <Grid item>
                    <Paper
                        square
                    >
                        <Grid container direction="column" justify="space-evenly" spacing={2}>
                            <Typography variant="h5">
                                Completed
                            </Typography>

                            {tasks.map((item, index) => {

                                if (item.status === 4) {
                                    return (
                                        <Grid item>
                                            <ProjectBoardItem taskData={item} setStatus={setStatus}/>
                                        </Grid>
                                    
                                    );
                                }
                                
                            })}
                            
                        </Grid>
                    </Paper>
                </Grid>

            </Grid>
        </Fragment>
    );

}
