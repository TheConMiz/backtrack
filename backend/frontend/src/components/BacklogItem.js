import React, { Fragment, useState } from 'react';

import { Card, CardContent, Typography, IconButton, Icon, Grid, TextField } from '@material-ui/core';

import Edit from '@material-ui/icons/Edit'
import {Link} from 'react-router-dom'

import RightArrow from '@material-ui/icons/ArrowRight';
import Delete from '@material-ui/icons/Delete';

function BacklogItem(props) {

    return (
        <Fragment>
            
            <Card>
            
                <CardContent>
                    
                    <TextField
                        label="Name"
                        // value={props.pbiData.name}
                        disabled
                    />
                    
                    <TextField
                        label="Description"
                        // value={props.pbiData.desc}
                        disabled
                    />
            

            
                    <TextField
                        label="Priority"
                        // value={props.pbiData.desc}
                        disabled
                    />
            
                    <TextField
                        label="Status"
                        // value={props.pbiData.desc}
                        disabled
                    />
            
                    <TextField
                        label="PBI"
                        // value={props.pbiData.desc}
                        disabled
                    />
            
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
                        disableFocusRipple
                        size="small"
                        component={Link}
                        to="/pbi"
                        onClick={() => {
                            props.editPBI(props.pbiData)
                        }}
                    >
                        <Icon>
                            <Edit/>
                        </Icon>
                    </IconButton>

                    {/* <IconButton
                        size="small" 
                        disableFocusRipple
                    >
                        <Icon>
                            
                            <RightArrow />
                        </Icon>
                    </IconButton> */}

                </CardContent>
            </Card>
        </Fragment>
    );
}
export default BacklogItem;