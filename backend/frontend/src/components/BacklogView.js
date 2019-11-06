import React, { Fragment, useState, useEffect } from 'react';

import BacklogItem from './BacklogItem';

import { Typography, Paper, Grid } from '@material-ui/core';
import { Button } from '@material-ui/core'; 
import { Link } from 'react-router-dom';

export default function BacklogView() {
    
    const [pbis, setPBIs] = useState([]);

    /**
     * Function for making a GET request for the PBIs
     */
    function getPBIs() {
        fetch("api/pbis/")

            .then(response => {

                if (response.status != 200) {
                    console.log("Something went wrong!");
                }

                return response.json()
            })

            .then(data => {
                setPBIs(data)
            });
    }

    useEffect(() => {
        
        getPBIs()

    }, []);

    return (    
        <Fragment>
            <Typography variant="h4">
                Product Backlog
            </Typography>

            <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="flex-start"
            >

                <Paper
                    square
                >
                    <Typography variant="h6">
                         Backlog
                    </Typography>

                    {pbis.map((item) => {
                        return (
                            <BacklogItem pbiData={item} key={item.pbi_id}/>
                        );
                    })}

                <Button component={Link}to="/pbi">
                    Add PBI
                </Button>

                </Paper>

            </Grid>
        </Fragment>
    );
}