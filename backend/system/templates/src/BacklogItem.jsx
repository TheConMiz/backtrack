import React, { Fragment, useState } from 'react';

import { Card, CardContent, Typography, IconButton, Icon, Grid } from '@material-ui/core';

import Edit from '@material-ui/icons/Edit'
import {Link} from 'react-router-dom'

import RightArrow from '@material-ui/icons/ArrowRight';
import Delete from '@material-ui/icons/Delete';

function BacklogItem() {
    return (
        <Fragment>

            <Card>
            
                <CardContent>
            
                    <Typography>
                        Description:
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