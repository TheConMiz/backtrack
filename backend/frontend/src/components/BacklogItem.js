import React, { Fragment, useState, useEffect } from 'react';

import { Card, CardContent, Typography, IconButton, Icon, Grid, TextField, Button , Paper } from '@material-ui/core';

import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';



import { Link } from 'react-router-dom';
function BacklogItem(props) {

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
    // TODO: DO PRIORITY SORTING
    return (
        <Fragment>
            
            <Card>
            
                <CardContent>
               
                    <Grid container direction="column" spacing={4} >

                        <Grid item>
                            <TextField
                                label="Name"
                                value={currentName}
                                disabled={!editable}
                                onChange={(event) => {
                                    setName(event.target.value)
                                }}

                            />
                        </Grid>

                        <Grid item>
                            <TextField
                                label="Estimated Cost"
                                type="number"
                                value={currentCost}
                                disabled={!editable}

                                onChange={(event) => {
                                    setCost(event.target.value)
                                }}
                            />
                            
                        </Grid>

                        <Grid item>
                            <TextField
                                label="Description"
                                value={currentDesc}
                                disabled={!editable}

                                onChange={(event) => {
                                    setDesc(event.target.value)
                                }}
                            />
                        </Grid>     

                    </Grid>

                    <Grid container direction="row">

                       
                        <Grid container direction="column">
                        <Grid item>
                        {tasks.map((taskitem) => {
                          
                            return (
                                <Grid item>
                                <Paper>
                                 <Typography>Name: {taskitem.name}
                                  </Typography>
                                  <Typography>Description: {taskitem.desc}
                                  </Typography>
                                  <Typography>Status: {taskitem.status}
                                  </Typography>
                                <Grid item>
                                 <IconButton size="small"
                                    disableFocusRipple
                                    onClick={() => {
                                    deleteTask(taskitem.task_id)
                                }}
                                >
                                <Icon>
                                    <Delete />
                                </Icon>
                                 </IconButton>
                                </Grid>
                                
                                 
                                </Paper>
                                                    
                                </Grid>

                            );
                    })}

                        </Grid>
                        
                        <Button size="small" component={Link} to="/task">Add Task</Button>
                        </Grid>

                    </Grid>

                </CardContent>
            </Card>
        </Fragment>
    );
}
export default BacklogItem;