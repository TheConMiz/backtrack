import React, { Fragment, useState, useEffect } from 'react';

import { Card, CardContent, Typography, IconButton, Icon, Grid, TextField, Button , Paper } from '@material-ui/core';

import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';



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
            .then(response=> console.log(response))
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

                        <Grid item>
                            <IconButton
                                size="small"
                                disableFocusRipple
                                onClick={() => {
                                    props.deletePBI(props.pbiData.id)
                                }}
                            >
                                <Icon>
                                    <Delete />
                                </Icon>
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton
                                disableFocusRipple
                                disabled={editable}
                                size="small"
                                onClick={() => {
                                    setEditable(true)
                                }}
                            >
                                <Icon>
                                    <Edit/>
                                </Icon>
                            </IconButton>
                        </Grid>

                        <Grid item>
                            <Button
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
                                Save
                            </Button>
                        </Grid>
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
                        <Button size="small" component={Link} to="/backlog_view" onClick={() => {
                            moveToSprint({
                                pbi_id: currentId, 
                                sprint_id: 1})
                            }}>
                        Move to Sprint</Button>
                        
                        </Grid>

                    </Grid>

                </CardContent>
            </Card>
        </Fragment>
    );
}
export default ProductBacklogItem;