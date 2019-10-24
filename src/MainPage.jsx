import React, { Fragment, useState } from 'react';

import { Typography, Button } from '@material-ui/core'; 

import {Link} from 'react-router-dom'

function MainPage() {
    return (
        <Fragment>
            <Typography variant="h5">
                Sign In
            </Typography>

            <Button
                disableFocusRipple
                variant="outlined"
                component={Link}
                to="/homepage"
            >
                <Typography variant="h5">
                    Developer
                </Typography>
            </Button>

            <Button
                disableFocusRipple
                variant="outlined"
                component={Link}
                to="/homepage" 
            >
                <Typography variant="h5">
                    Manager
                </Typography>
            </Button>
            
        </Fragment>
    );
}

export default MainPage;