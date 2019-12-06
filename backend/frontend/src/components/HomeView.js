import React, { Fragment, useState, useEffect } from 'react';

import ProjectItem from './ProjectItem';

import { Typography, Paper, Grid, Table } from '@material-ui/core';
import { Button } from '@material-ui/core'; 
import { Link } from 'react-router-dom';

import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => createStyles({
    root: {
        minHeight: '100vh'
    },

    table: {
        minHeight: '80vh',
        maxHeight: '100vh',
        minWidth: '100vh',
        maxWidth: '100vh',
    } 
}));

export default function BacklogView() {

    const classes = useStyles();

    var backlogurl ="/backlog_view?p=";
    
    const [projects, setProjects] = useState([]);

export default function BacklogView() {
    var backlogurl = "/backlog_view?p=";
    var checkProjects =false;

    const [projects, setProjects] = useState([]);
    
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
                // console.log(data)
                setProjects(data)
            });
    }

    function editProject(projectdata) {
        // console.log("mlem")
        fetch("api/project/" + projectdata.p_id + "/", {
            method: "PATCH",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(projectdata)
        })

            .then(response => response)
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
            <Fragment>
                <Typography variant="h4" align="center">
                    Home Page
                </Typography>
            </Fragment>


            <Grid
                className={classes.root}
                container
                direction = "column"
                justify = "center"
                alignItems="center"
                spacing={2}
            >
                <Grid item>
                    <Table>
                        
                    </Table>
                </Grid>

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

                             
                            </Fragment>
                        );

                    })}
                    {checkProjects ? (
                       <Button size="small" component={Link} to="/new_project">Add New Project</Button>
                    ) : (
                        ''
                        )}

                    <br></br>
                    <br></br>


                </Paper>

            </Grid>
        </Fragment>
    );
}