import React, { Fragment, useState, useEffect } from 'react';

import ProjectItem from './ProjectItem';

import { Typography, Paper, Grid, Table } from '@material-ui/core';
import { Button } from '@material-ui/core'; 
import { Link } from 'react-router-dom';

import { makeStyles, createStyles } from '@material-ui/core/styles';


export default function BacklogView() {
    var backlogurl ="/backlog_view?p=";
    
    const [projects, setProjects] = useState([]);

    const [projectDevelopers, setProjectDevelopers] = useState([]);

    /**
     * Function for getting all projects
     */
    const getProjects = () => {
        fetch("api/project/")

            .then(response => {

                if (response.status != 200) {
                    console.log("Something went wrong.");
                }
               
                return response.json()
                
            })

            .then(data => {
                setProjects(data)
            });
    }
    
    const editProject = (projectdata) => {
        fetch("api/project/" + projectdata.p_id + "/", {
            method: "PATCH",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(projectdata)
        })
            
            .then(response=> response)
            .then(response => console.log(response))
            .then(response => getProjects())
        
    }

    const getProjectDevelopers = () => {
        fetch("api/project_developers/")

            .then(response => {

                if (response.status != 200) {
                    console.log("Something went wrong.");
                }

                return response.json()
            })

            .then(response => {
                    // console.log(response)
                    setProjectDevelopers(response)
                    // console.log(projectDevelopers)
            });
    }

    useEffect(() => {
        
        getProjects()
        getProjectDevelopers()

    }, []);

    // console.log(projectDevelopers)

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
                            
                            <Fragment key={index}>
                                Project ID: {item.id}
                                <ProjectItem projectData={item} key={item.id}
                                    editProject={editProject}
                                />

                    <Button size="small" component={Link} to="/new_project">Add New Project</Button>

                     
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