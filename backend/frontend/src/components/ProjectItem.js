import React, { Fragment, useState } from 'react';

import { Card, CardContent, Typography, IconButton, Icon, Grid, TextField, Button } from '@material-ui/core';

import Edit from '@material-ui/icons/Edit'

import { Link } from 'react-router-dom'

import AddMemberDialog from './AddMemberDialog';



function ProjectItem(props) {
    
    const [editable, setEditable] = useState(false);

    const [currentName, setName] = useState(props.projectData.name);

    const [currentDesc, setDesc] = useState(props.projectData.desc);

    const [currentManager, setManager] = useState(props.projectData.manager_id);

    const [currentOwner, setOwner] = useState(props.projectData.owner_id);

    const [addMemberDialog, setMemberDialog] = useState(false);

    function addMemberEmailNotification(email) {
        fetch("send/")

            .then(response => {

                if (response.status != 200) {
                    console.log("Something went wrong!");
                }

                return response.json()
            })       
    }

    return (
        <Fragment>

            <AddMemberDialog
                projectData={props.projectData}
                openDialog={addMemberDialog}
                setDialog={setMemberDialog}
                users={props.users}
                userInfo={props.userInfo}
                projectDevelopers={props.projectDevelopers}
                addMemberEmailNotification={addMemberEmailNotification}
                getProjectDevelopers={props.getProjectDevelopers}
            />

            <Card>

                <CardContent>
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
                            label="Desc"
                            value={currentDesc}
                            disabled={!editable}
                            onChange={(event) => {
                                setDesc(event.target.value)
                            }}
                        />
                    </Grid>

                    {
                        props.userInfo.type === 1 ?
                            <Fragment />

                            :

                            <Grid item>
                                <TextField
                                    label="Owner"
                                    disabled
                                    value={
                                        
                                        props.users.find(item => item.id === currentOwner) === undefined ? 
                                            currentOwner
                                            :
                                        props.users.find(item => item.id === currentOwner).first_name.concat(" ", props.users.find(item => item.id === currentOwner).last_name)
                                    }

                                />
                            </Grid>

                    }


                    
                    <Grid item>
                        {
                            props.userInfo.type === 2 ?
                                <Fragment />
                                :
                                <TextField
                                    label="Manager"
                                    
                                    value={
                                        props.users.find(item => item.id === currentManager) === undefined ? 
                                            currentManager
                                            :
                                        props.users.find(item => item.id === currentManager).first_name.concat(" ", props.users.find(item => item.id === currentManager).last_name)
                                    }
                                    disabled={!editable}
                                    //TODO: change manager
                                    // onChange={(event) => {
                                    //     setManager(event.target.value)
                                    // }}
                                />
                                
                        }
                    </Grid>

                    <Grid>

                        {
                            props.userInfo.type === 2 ?
                                <Fragment />
                                :
                                props.viewOnly ? 
                                    <Fragment />
                                    :
                                    <Button
                                        onClick={() => {
                                            setMemberDialog(true);
                                        }}
                                        disableFocusRipple
                                    >
                                        Add Member
                                    </Button>
                        }

                    </Grid>

                    <Grid container direction="row">

                        {
                            props.userInfo.type === 2 ?
                                <Fragment />
                                :

                                props.viewOnly ? 
                                    <Fragment />
                                    :

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
                                                <Edit />
                                            </Icon>
                                        </IconButton>
                                    </Grid>
                        }

                        <Grid item>
                            {
                                props.userInfo.type === 2 ?
                                    <Fragment />
                                    :
                                    props.viewOnly ? 
                                        <Fragment />
                                        :
                                        <Button
                                            disabled={!editable}
                                            onClick={() => {
                                                setEditable(false)

                                                props.editProject({
                                                    ...props.projectData,
                                                    name: currentName,
                                                    desc: currentDesc,
                                                    manager_id: currentManager,
                                                })
                                            }}
                                        >
                                            Save
                                        </Button>

                            }
                        </Grid>

                        <Grid item>
                            <Button
                                size="small"
                                component={Link}
                                to="/project_board"
                            >
                                Sprint Board
                            </Button>
                        </Grid>

                        <Grid item>
                            <Button
                                size="small"
                                component={Link}
                                to="/product_backlog"
                            >
                                Product Backlog
                            </Button> 
                        </Grid>
                    </Grid>

                </CardContent>
            </Card>
        </Fragment>
    );
}
export default ProjectItem;