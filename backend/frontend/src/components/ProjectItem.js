import React, { Fragment, useState } from 'react';

import { Card, CardContent, Typography, IconButton, Icon, Grid } from '@material-ui/core';

import Edit from '@material-ui/icons/Edit'
import {Link} from 'react-router-dom'

import RightArrow from '@material-ui/icons/ArrowRight';
import Delete from '@material-ui/icons/Delete';

function ProjectItem(props) {
    //console.log(props.projectData)
    return (
        <Fragment>
            
            <Card>
            
                <CardContent>

                    <Typography align="center">
                        Project ID: {props.projectData.p_id}
                    </Typography>
                    <Typography align="center">
                        Owner ID: {props.projectData.owner_id}
                    </Typography>
                    <Typography align="center">
                        Manager ID: {props.projectData.manager_id}
                    </Typography>
                    <Typography align="center">
                        Name: {props.projectData.name}
                    </Typography>
            
                    <Typography color="textSecondary" align="center">
                        Description: {props.projectData.desc}
                    </Typography>
                
                    
                </CardContent>
            </Card>
        </Fragment>
    );
}
export default ProjectItem;