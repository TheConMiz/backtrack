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

    const [users, setUsers] = useState([]);

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
        fetch("api/project/" + projectdata.id + "/", {
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
                setProjectDevelopers(response)
            });
    }

    const getUsers = () => {
        fetch("api/get_users/")

            .then(response => {

                if (response.status != 200) {
                    console.log("Something went wrong. getUsers");
                }

                return response.json()

            })

            .then(data => {
                setUsers(data)
                console.log(data)
            });
    }

    useEffect(() => {
        getProjects()
        getProjectDevelopers()
        getUsers()
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

                <Grid item>
                    <Fragment>
                        <Typography variant="h6" align="center">
                            Welcome, {props.userInfo.name}
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
                                            <TableCell align="center">
                                                <Typography variant="h5">
                                                    Project(s) You Manage
                                                </Typography>
                                            </TableCell>
                                            
                                        </TableRow>
                                    </TableHead>

                                    <TableBody>

                                        {
                                            projects.filter(item => item.manager_id === props.userInfo.id).length === 0 ? 
                                                <TableRow>
                                                    <TableCell>
                                                        <Typography>You currently have no projects to manage.</Typography>
                                                    </TableCell>
                                                </TableRow>
                                                
                                                : 
                                                
                                                projects.filter(item => item.manager_id === props.userInfo.id).map((item, index) => {
                                                    return (
                                                        <TableRow key={index}>
                                                            <TableCell>
                                                                <Fragment>
                                                                    <ProjectItem
                                                                        projectData={item}
                                                                        editProject={editProject}
                                                                        userInfo={props.userInfo}
                                                                        users={users}
                                                                        // projectDevelopers={projectDevelopers}
                                                                    />
                                                                </Fragment>
                                                            </TableCell>
                                                            
                                                        </TableRow>
                                                    );
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
                            
                            <Grid item>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="center">
                                                <Typography variant="h5">
                                                    Project(s) You Own
                                                </Typography>
                                            </TableCell>
                                            
                                        </TableRow>
                                    </TableHead>

                                    <TableBody>
                                        {

                                            projects.filter(item => item.owner_id === props.userInfo.id).length === 0 ? 
                                                <TableRow>
                                                    <TableCell>
                                                        <Button
                                                            disableFocusRipple
                                                        >
                                                            <Typography>
                                                                Create a New Project
                                                            </Typography>
                                                        </Button>
                                                    </TableCell>
                                                </TableRow>

                                                :

                                                projects.filter(item => item.owner_id === props.userInfo.id).map((item, index) => {
                                                    return (
                                                        <TableRow
                                                            key={index}
                                                        >
                                                            <TableCell>
                                                                <Fragment>
                                                                    <ProjectItem
                                                                        projectData={item}
                                                                        editProject={editProject}
                                                                        userInfo={props.userInfo}
                                                                        users={users}
                                                                        projectDevelopers={projectDevelopers}
                                                                        getProjectDevelopers={getProjectDevelopers}
                                                                    />   
                                                                </Fragment>
                                                            </TableCell>
                                                        </TableRow>
                                                    )
                                                })
                                        }
                                    </TableBody>    
                                </Table>
                            </Grid>
                            
                            :

                            <Fragment/>
                            
                    }

                    {
                        props.userInfo.type === 1 ? 

                            <Grid item>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="center">
                                                <Typography variant="h5">
                                                    Project(s) You Contribute To
                                                </Typography>
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>

                                    <TableBody>
                                        {
                                            projectDevelopers.filter(item => item.dev_id === props.userInfo.id).length === 0 ? 
                                                <TableRow>
                                                    <TableCell>
                                                        <Typography>
                                                            You have not been invited to work on any projects.
                                                        </Typography>
                                                    </TableCell>
                                                </TableRow>
                                                :

                                                <Fragment>
                                                    {
                                                        projects.map((item, index) => {
                                                            if (projectDevelopers.filter(item => item.dev_id === props.userInfo.id).map(item => item.project_id).includes(item.id)) {
                                                                return (
                                                                    <TableRow
                                                                        key={index}
                                                                    >
                                                                        <TableCell>
                                                                            <ProjectItem
                                                                                projectData={item}
                                                                                editProject={editProject}
                                                                                userInfo={props.userInfo}
                                                                                viewOnly={true}
                                                                                users={users}
                                                                                projectDevelopers={projectDevelopers}
                                                                            />
                                                                        </TableCell>
                                                                    </TableRow>
                                                                );
                                                            }
                                                        })
                                                    }
                                                    
                                                </Fragment>
                                        }
                                    </TableBody>
                                </Table>
                            </Grid>
                            
                            :
                            
                            <Fragment />
                    }

                </Grid>                
            </Grid>
        </Grid>
    );
}