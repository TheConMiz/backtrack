import React, { Fragment, useState, useEffect } from 'react';

import ProjectItem from './ProjectItem';

import { Typography, Paper, Grid } from '@material-ui/core';
import { Button } from '@material-ui/core'; 
import { Link } from 'react-router-dom';


export default function BacklogView(props) {
    
    let backlogurl = "/backlog_view?p=";
    
    const [projects, setProjects] = useState([]);

    /**
     * Function for making a GET request for the PBIs
     */
    function getProjects() {

        fetch("api/project/")

            .then(response => {

                if (response.status != 200) {
                    console.log("Something went wrong!");
                }
                
                return response.json()
            })
            
            /**
             * Set obtained project data to component State
             */
            .then(data => {
               // console.log(data)
                setProjects(data)
            });
    }

    function editProject(projectData) {

        fetch("api/project/" + projectData.p_id + "/", {
            method: "PATCH",
            
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },

            body: JSON.stringify(projectData)
        })
            
            .then(response => response)
            
            .then(response => console.log(response))
            
            .then(response => getProjects())
        
    }

    useEffect(() => {
        
        getProjects()

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

                  
                    {projects.map((item, index) => {
                        {backlogurl = backlogurl + item.id}
                    
                        return (
                            
                            <Fragment
                                key={index}
                            >
                                
                                <Typography>
                                    Project ID: {item.id}
                                </Typography>
                                
                                <ProjectItem
                                    projectData={item}
                                    
                                    editProject={editProject}
                                />

                                <Button size="small" component={Link} to="/new_project">
                                    Add New Project
                                </Button>

                    
                            </Fragment>
                        );
                        
                    })}

                    <br></br>
                    <br></br>
                    
                </Paper>

            </Grid>
        </Fragment>
    );
}