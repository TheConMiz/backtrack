import React, { Fragment, useState } from 'react';

import BacklogItem from './BacklogItem';

import { Typography, Paper, IconButton, Icon, Grid } from '@material-ui/core';
import { Button } from '@material-ui/core'; 
import {Link} from 'react-router-dom'
import Add from '@material-ui/icons/Add';


{/* <Grid>
                        <Grid item container>
                            <Grid item>
                                <Typography variant="h5">
                                    Sprint Backlog
                                </Typography>
                            </Grid>
                            <Grid item>
                                <IconButton size="small">
                                    <Icon>
                                        <Add />
                                    </Icon>
                                </IconButton>
                            </Grid>
                            
                        </Grid>
                    </Grid> */}


function BacklogView() {

    const [sprintItems, setSprintItems] = useState([{}, {}])
    const [toDoItems, setToDoItems] = useState([{}])



    return (    
        <Fragment>
            <Typography>
               <h1>Backlog</h1> 
            </Typography>

            <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="flex-start"
            >

                <Paper
                    square="true"
                >
                    <Typography
                        variant="h6"
                    >
                         Backlog
                    </Typography>
                    {sprintItems.map((item) => {
                        return (
                            <BacklogItem />
                        );
                    })}

                <Button component={Link}
                        to="/pbi">
                            Add PBI    
                </Button>

                </Paper>

               

                <Paper
                    square="true"
                >
                    <Typography
                        variant="h6"
                    >
                        To-Do
                    </Typography>

                    {toDoItems.map((item) => {
                        return (
                            <BacklogItem />
                        );
                    })}
                </Paper>

            </Grid>
        </Fragment>
    );
}

export default BacklogView;