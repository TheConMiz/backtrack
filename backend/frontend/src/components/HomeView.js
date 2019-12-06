import React, { Fragment, useState, useEffect } from 'react';

import ProjectItem from './ProjectItem';

import { Typography, Paper, Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';



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
                    console.log(response);
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
                    console.log(response);
                }

                return response.json()

                .then(data => {
                    setProjectDevelopers(data)
                    console.log(projectDevelopers)
                });
            
            })
    }

    useEffect(() => {

        getProjects()
        getProjectDevelopers()

    }, []);

    if (projects.length == 0) {
        checkProjects=true;
    }

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


                    {projects.map((item) => {
                        { backlogurl = backlogurl + item.id }

                        return (

                            <Fragment>
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