import React, { Fragment, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Table, TableBody, TableCell, TableHead, TableRow, Card, Typography, Paper, Button } from '@material-ui/core';
import BacklogItem from './BacklogItem';

const useStyles = makeStyles({
    card: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
});


export default function ProjectBoard() {
    const [pbis, pbiToState] = useState([])
    const [tasks, taskToState] = useState([])
    const [todo, todoState] = useState([])
    function getPBIs() {
        fetch("api/pbis/")

            .then(response => {

                if (response.status != 200) {
                    console.log("Something went wrong!");
                }

                return response.json()
            })

            .then(data => {
                pbiToState(data);
            });
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

    function getTodo() {
        fetch("api/tasks/")

            .then(response => {

                if (response.status != 200) {
                    console.log("Something went wrong!");
                }
                var temp= response.json()
                temp = temp.filter(function(i) {
                    return i.status==1;
                });
                JSON.stringify(temp);
                return temp;
                console.log(temp);
                
            })

            .then(data => {
                todoState(data);
                
            });
            
           
    }


    useEffect(() => {
        getPBIs();
        getTasks();
    
       
    }, []);

    const classes = useStyles();

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
                        <Typography variant="h5">
                            To-Do
                        </Typography>
                        <br></br>
                        
                        <Paper>
                        {tasks.map((taskitem) => {
                            if(taskitem.status==1)
                            return (
                                <Grid item>
                                <Paper>
                                  <Typography>Task Name: {taskitem.name}
                                  </Typography>
                                  <Typography>Description: {taskitem.desc}
                                  </Typography>
                                  <Typography>Status: {taskitem.status}
                                  </Typography>
                                  <Typography>PBI ID: {taskitem.pbi_id}
                                  </Typography>
                                 
                                </Paper>
                                                    
                                </Grid>

                            );
                    })}
            
                                

                  
                     </Paper>
                    </Paper>
                </Grid>

                <Grid item>

                <Paper
                        square
                    >
                        <Typography variant="h5">
                           In Progress
                        </Typography>
                        <br></br>
                        
                        <Paper>
                        {tasks.map((taskitem) => {
                            if(taskitem.status==2)
                            return (
                                <Grid item>
                                  <Paper>
                                  <Typography>Task Name: {taskitem.name}
                                  </Typography>
                                  <Typography>Description: {taskitem.desc}
                                  </Typography>
                                  <Typography>Status: {taskitem.status}
                                  </Typography>
                                  <Typography>PBI ID: {taskitem.pbi_id}
                                  </Typography>
                                </Paper>

                                </Grid>

                            );
                    })}
                        </Paper>

                    </Paper>
                    </Grid>

                <Grid item>
                <Paper
                        square
                    >
                        <Typography variant="h5">
                           Under Review
                        </Typography>
                        <br></br>
                        
                        <Paper>
                        {tasks.map((taskitem) => {
                            if(taskitem.status==3)
                            return (
                                <Grid item>
                                  <Paper>
                                  <Typography>Task Name: {taskitem.name}
                                  </Typography>
                                  <Typography>Description: {taskitem.desc}
                                  </Typography>
                                  <Typography>Status: {taskitem.status}
                                  </Typography>
                                  <Typography>PBI ID: {taskitem.pbi_id}
                                  </Typography>
                                </Paper>
                                                    
                                </Grid>

                            );
                    })}
                        </Paper>

                    </Paper>
                </Grid>

                <Grid item>
                <Paper
                        square
                    >
                        <Typography variant="h5">
                          Completed
                        </Typography>
                        <br></br>
                        
                        <Paper>
                        {tasks.map((taskitem) => {
                            if(taskitem.status==4)
                            return (
                                <Grid item>
                                 <Paper>
                                  <Typography>Task Name: {taskitem.name}
                                  </Typography>
                                  <Typography>Description: {taskitem.desc}
                                  </Typography>
                                  <Typography>Status: {taskitem.status}
                                  </Typography>
                                  <Typography>PBI ID: {taskitem.pbi_id}
                                  </Typography>
                                </Paper>
                                                    
                                </Grid>

                            );
                    })}
                        </Paper>

                    </Paper>
                    
                </Grid>

               

            </Grid>
        </Fragment>
    );

}
