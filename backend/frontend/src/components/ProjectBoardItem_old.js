import React, { useState, Fragment } from 'react';

import { Button, IconButton, Typography, Paper, Grid, Menu, Icon, MenuItem, TextField } from '@material-ui/core';

import UpArrow from "@material-ui/icons/ArrowUpward";
import DownArrow from '@material-ui/icons/ArrowDownward';
import LeftArrow from '@material-ui/icons/ArrowBack';
import RightArrow from '@material-ui/icons/ArrowForward';

function ProjectBoardItem(props) {

    return (
        <Paper>
            <Grid item container direction="column" spacing={2}>

                <Grid item>
                    <Typography variant="h6">
                        PBI #{props.taskData.pbi_id}
                    </Typography>
                </Grid>

                <Grid item>
                    <Typography variant="h6">
                        Name: {props.taskData.name}
                    </Typography>
                </Grid>

                <Grid item>
                    <Typography variant="h6">
                        Description: {props.taskData.desc}
                    </Typography>
                </Grid>

                <Grid item container direction="row">

                    <Grid item>
                        <IconButton
                            disableFocusRipple
                            disabled={props.taskData.status === 1 ? true: false}
                            onClick={() => {
                                props.setStatus({
                                    ...props.taskData,
                                    status: props.taskData.status - 1
                                })
                            }}

                        >
                            <Icon>
                                <LeftArrow/>
                            </Icon>
                        </IconButton>
                    </Grid>

                    <Grid item>
                        <IconButton
                            disableFocusRipple
                            disabled
                        >
                            <Icon>
                                <UpArrow/>
                            </Icon>
                        </IconButton>
                    </Grid>

                    <Grid item>
                        <IconButton
                            disableFocusRipple
                            disabled
                        >
                            <Icon>
                                <DownArrow/>
                            </Icon>
                        </IconButton>
                    </Grid>

                    <Grid item>
                        <IconButton
                            disableFocusRipple
                            disabled={props.taskData.status === 4 ? true : false}
                            onClick={() => {
                                props.setStatus({
                                    ...props.taskData,
                                    status: props.taskData.status + 1
                                })
                            }}
                        >
                            <Icon>
                                <RightArrow/>
                            </Icon>
                        </IconButton>
                    </Grid>
                </Grid>

            </Grid>

        </Paper>
    );


}

export default ProjectBoardItem;