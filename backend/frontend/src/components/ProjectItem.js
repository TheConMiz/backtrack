import React, { Fragment, useState } from 'react';

import { Card, CardContent, Typography, IconButton, Icon, Grid, TextField, Button } from '@material-ui/core';

import Edit from '@material-ui/icons/Edit'
import {Link} from 'react-router-dom'

import RightArrow from '@material-ui/icons/ArrowRight';
import Delete from '@material-ui/icons/Delete';

function ProjectItem(props) {
    console.log(props.projectData)
    const [editable, setEditable] = useState(false);
    const [currentName, setName] = useState(props.projectData.name);
    const [currentDesc, setDesc] = useState(props.projectData.desc);
    const [currentManager, setManager] = useState(props.projectData.manager_id);
    return (
        <Fragment>
            
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
                            <Grid item>
                             <TextField
                                label="Owner"
                                value={props.projectData.owner_id}
                               
                            />
                            </Grid>
                            <Grid item>
                             <TextField
                                label="Manager"
                                value={currentManager}
                                disabled={!editable}
                                onChange={(event) => {
                                    setManager(event.target.value)
                                }}
                            />
                            </Grid>
                            <Grid container direction="row">

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
                                        <Edit/>
                                    </Icon>
                                </IconButton>
                            </Grid>

                            <Grid item>
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
                            </Grid>

                            </Grid>
                    
            
                
                
                    
                </CardContent>
            </Card>
        </Fragment>
    );
}
export default ProjectItem;