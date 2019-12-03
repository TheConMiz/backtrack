import React, { Fragment, useState } from 'react';

import { Typography, Button, Card, TextField, Grid } from '@material-ui/core';

import { makeStyles, createStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => createStyles({
    loginBox: {
        minWidth: 250,
        maxWidth: 300,
        minHeight: 250,
        maxHeight: 300,
        margin: "auto",
    },
    loginGrid: {
        minHeight: '100vh',
    }

}));

export default function LoginPage(props) {

    const classes = useStyles();

    return (
        <Fragment>

            <Fragment>
                <Typography variant="h4" align="center">
                    Welcome to Backtrack
                </Typography>
            </Fragment>

            <Grid
                className={classes.loginGrid}
                container
                direction = "column"
                justify = "center"
                alignItems="center"
                spacing={4}
            >

                <Grid item>
                    <Card
                        className={classes.loginBox}
                    >
                        <Grid
                            container
                            direction="column"
                            justify="center"
                            alignItems="center"
                            spacing={1}
                        >

                            <Grid item>
                                <Typography variant="h5">
                                    Sign In
                                </Typography>
                            </Grid>

                            <Grid item>
                                <TextField
                                    label="Username"
                                />
                            </Grid>
                            
                            <Grid item>
                                <TextField
                                    label="Password"
                                    type="password"
                                />
                            </Grid>

                            <div style={{height: "20px"}}/>
                            
                            <Grid item>
                                <Button
                                    disableFocusRipple
                                    component={Link}
                                    variant="outlined"
                                    to="/homepage"
                                >
                                    <Typography>
                                        Submit
                                    </Typography>
                                </Button>
                            </Grid>

                        </Grid>

                    </Card>
                </Grid>

            </Grid>
        </Fragment>
    );
}