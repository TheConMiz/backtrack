import React, { Fragment, useState } from 'react';

import { Typography, Button, Card, TextField, Grid } from '@material-ui/core';

import { makeStyles, createStyles } from '@material-ui/core/styles';

import { Redirect } from 'react-router';

const useStyles = makeStyles((theme) => createStyles({
    loginBox: {
        minWidth: 250,
        maxWidth: 300,
        minHeight: 300,
        maxHeight: 325,
        margin: "auto",
    },
    loginGrid: {
        minHeight: '100vh',
    }

}));

export default function LoginPage(props) {

    const classes = useStyles();

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    props.checkUserSignedIn()

    if (props.isAuth) {
        return (
            <Redirect to="/"/>
        )
    }

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
                                <Typography color="error">
                                    {props.incorrectAuth ? "Incorrect Credentials." : ""}
                                </Typography>
                            </Grid>

                            <Grid item>
                                <TextField
                                    label="Username"
                                    value={username}
                                    onChange={(event) => {
                                        setUsername(event.target.value)
                                    }}
                                />
                            </Grid>
                            
                            <Grid item>
                                <TextField
                                    label="Password"
                                    type="password"
                                    value={password}
                                    onChange={(event) => {
                                        setPassword(event.target.value)
                                    }}
                                />
                            </Grid>

                            <div style={{height: "20px"}}/>
                            
                            <Grid item>
                                <Button
                                    disableFocusRipple
                                    // component={Link}
                                    variant="outlined"
                                    // to="/homepage"
                                    onClick={() => {
                                        props.authenticateUser({username, password})
                                    }}
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