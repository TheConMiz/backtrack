import React, { Fragment, useState, useEffect } from 'react';

import ProjectItem from './ProjectItem';

import { Typography, Paper, Grid, Table, TableCell, TableHead, TableBody, TableRow } from '@material-ui/core';
import { Button } from '@material-ui/core'; 
import { Link } from 'react-router-dom';

import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => createStyles({
    root: {
        minHeight: '100vh',
    },

    table: {
        width: '100vw'
    }
}));

export default function BacklogView(props) {

    const classes = useStyles();

    // var backlogurl ="/backlog_view?p=";
    
    const [projects, setProjects] = useState([]);

    const [projectDevelopers, setProjectDevelopers] = useState([]);

    /**
     * Function for making a GET request for the PBIs
     */
    function getProjects() {
        fetch("api/project/")

            .then(response => {

                if (response.status != 200) {
                    console.log("Something went wrong. getProjects");
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
            .then(response => getProjects())
        
    }

    const getProjectDevelopers = () => {
        fetch("api/project_developers/")

            .then(response => {

                if (response.status != 200) {
                    console.log("Something went wrong. getProjectDev");
                }

                return response.json()
            })

            .then(response => {
                // console.log(response)
                
                let devContribs = response.filter(item => item.dev_id === props.userInfo.id)
                // console.log(devContribs)
                setProjectDevelopers(devContribs)
            });
    }

    

    useEffect(() => {
        
        getProjects()
        getProjectDevelopers()
        

    }, [props.userInfo]);

    return (
        
        <Grid>
            
            <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="center"
                spacing={2}
            >
                <Grid item>
                    <Fragment>
                        <Typography variant="h4" align="center">
                            Home Page
                        </Typography>
                    </Fragment>
                </Grid>

                <Grid
                    item
                    container
                    direction="row"
                    justify="center"
                    alignItems="flex-start"
                    spacing={2}
                >
                    {
                        props.userInfo.type === 2 ? 
                            <Grid item>
                        
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>
                                                <Typography variant="h5">
                                                    Project(s) You Manage
                                                </Typography>
                                            </TableCell>
                                            
                                        </TableRow>
                                    </TableHead>

                                    <TableBody>
                                        {
                                            projects.map((item, index) => {
                                                
                                                if (item.manager_id === props.userInfo.id) {
                                                    return (
                                                        <TableRow key={index}>
                                                            <TableCell>
                                                                <Fragment>
                                                                    <ProjectItem projectData={item} key={item.id}
                                                                        editProject={editProject}
                                                                    />

                                                                    <Button size="small" component={Link} to="/new_project">
                                                                        Add New Project
                                                                    </Button>
                                                                </Fragment>
                                                            </TableCell>
                                                            
                                                        </TableRow>
                                                    );
                                                }
                                            })
                                        }
                                    </TableBody>
                                </Table>
                            </Grid>

                            :
                            
                            <Fragment />
                    }

                    {
                        props.userInfo.type === 1 ? 
                            <Fragment>

                                <Grid item>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>
                                                    <Typography variant="h5">
                                                        Project(s) You Own
                                                    </Typography>
                                                </TableCell>
                                                
                                            </TableRow>
                                        </TableHead>

                                        {/* <TableBody>
                                            {
                                                projectDevelopers.map((item, index) => {

                                                    let tempProject = projects.filter(project => project.id === item.project_id)

                                                    console.log(tempProject)
                                                    
                                                    return (
                                                        <TableRow key={index}>
                                                            <TableCell>
                                                                <Fragment>
                                                                    <ProjectItem projectData={tempProject[0]} key={tempProject[0].id}
                                                                        editProject={editProject}
                                                                    />

                                                                    <Button size="small" component={Link} to="/new_project">
                                                                        Add New Project
                                                                    </Button>
                                                                </Fragment>
                                                            </TableCell>
                                                        </TableRow>
                                                    );
                                                    
                                                })
                                            }
                                        </TableBody> */}
                                    </Table>
                                </Grid>

                                <Grid item>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>
                                                    <Typography variant="h5">
                                                        Project(s) You Contribute To
                                                    </Typography>
                                                </TableCell>
                                            </TableRow>
                                        </TableHead>

                                        <TableBody>
                                            {
                                                projects.map((item, index) => {
                                                    
                                                    if (item.owner_id === props.userInfo.id) {
                                                        return (
                                                            <TableRow key={index}>
                                                                <TableCell>
                                                                    <Fragment>
                                                                        <ProjectItem projectData={item} key={item.id}
                                                                            editProject={editProject}
                                                                        />

                                                                        <Button size="small" component={Link} to="/new_project">
                                                                            Add New Project
                                                                        </Button>
                                                                    </Fragment>
                                                                </TableCell>

                                                            </TableRow>
                                                        );
                                                    }
                                                })
                                            }
                                        </TableBody>
                                    </Table>
                                </Grid>
                            </Fragment>
                            
                        :
                            <Fragment />
                    
                    }
                </Grid>
                
            </Grid>
        </Grid>
    );
}