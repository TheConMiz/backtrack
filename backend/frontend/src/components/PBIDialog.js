import React, { useState, useEffect, Fragment } from 'react';

import { Dialog, Typography } from '@material-ui/core';

function PBIDialog(props) {
    return (
        <Fragment>
            <Dialog open={true}>
                <Typography>
                    PBI Stuff
                </Typography>
            </Dialog>
        </Fragment>
    );
}