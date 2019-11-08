import React, { Fragment, useState, useEffect } from 'react';

import ProjectItem from './ProjectItem';

import { Typography, Paper, Grid } from '@material-ui/core';
import { Button } from '@material-ui/core'; 
import { Link } from 'react-router-dom';


export default function BacklogView() {
    
    const [pbis, setPBIs] = useState([]);

    /**
     * Function for making a GET request for the PBIs
     */
    function getPBIs() {
        fetch("api/project/")

            .then(response => {

                if (response.status != 200) {
                    console.log("Something went wrong!");
                }
               
                return response.json()
                
            })

            .then(data => {
               // console.log(data)
                setPBIs(data)
            });
    }

    useEffect(() => {
        
        getPBIs()

    }, []);

    return (    
        <Fragment>
            <Typography variant="h4" align="center">
                Home Page
            </Typography>
            <br></br><br></br>


            <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="flex-start"
            >

                <Paper>
                      <Typography variant="h6" align="center">
                        Projects
                    </Typography>


                    {pbis.map((item) => {
                        return (
                            <Fragment>
                                <ProjectItem projectData={item} key={item.p_id}/>
                                <Button size="small" component={Link} to="/backlog_view">View Backlog</Button>
                                <Button size="small" component={Link} to="/project_board">Scrum Board</Button>
                            </Fragment>
                        );
                        
                    })}
                    <br></br>
                    <br></br>
                     <Button size="small" component={Link} to="/new_project">Add New Project</Button>

                    

                </Paper>

            </Grid>
        </Fragment>
    );
}