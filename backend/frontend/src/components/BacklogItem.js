import React, { Fragment, useState } from 'react';

import { Card, CardContent, Typography, IconButton, Icon, Grid } from '@material-ui/core';

import Edit from '@material-ui/icons/Edit'
import {Link} from 'react-router-dom'

import RightArrow from '@material-ui/icons/ArrowRight';
import Delete from '@material-ui/icons/Delete';

function BacklogItem(props) {

    return (
        <Fragment>
            
            <Card>
            
                <CardContent>

                    <Typography>
                        Name: {props.pbiData.name}
                    </Typography>
            
                    <Typography>
                        Description: {props.pbiData.desc}
                    </Typography>
            
                    <IconButton
                        disableFocusRipple
                        size="small"
                        component={Link}
                        to="/pbi"
                    >
                        <Icon>
                            <Edit/>
                        </Icon>
                    </IconButton>
            
                    <Typography>
                        Priority: 
                    </Typography>
            
                    <Typography>
                        Status:
                    </Typography>
            
                    <Typography>
                        PBI:
                    </Typography>
            
                    <IconButton
                        size="small"
                        disableFocusRipple
                        onClick={() => {
                            props.deletePBI(props.pbiData.pbi_id)
                        }}
                    >
                        <Icon>
                            <Delete />
                        </Icon>
                    </IconButton>

                    <IconButton
                        size="small" 
                        disableFocusRipple
                        
                    >
                        <Icon>
                            {/**If in the sprint backlog, right arrow. else, left arrow */}
                            <RightArrow />
                        </Icon>
                    </IconButton>
                </CardContent>
            </Card>
        </Fragment>
    );
}
export default BacklogItem;