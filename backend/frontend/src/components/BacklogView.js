import React, { Fragment, useState, useEffect } from 'react';

import BacklogItem from './BacklogItem';
import BacklogDialog from './BacklogDialog';

import { Typography, Paper, Grid } from '@material-ui/core';
import { Button } from '@material-ui/core'; 
import { Link } from 'react-router-dom';

export default function BacklogView() {

    const [pbis, pbiToState] = useState([]);
    const [pbiDialog, setPBIDialog] = useState(false);

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
                pbiToState(data);
            });
    }

    /**
     * Function for deleting a given PBI. Passed as props to each BacklogItem
     */
    function deletePBI(pbiID) {
        fetch("api/pbis/" + pbiID, {
            method: "DELETE",
            cache: "no-cache",
        })
            .then(response => response)
            .then(response => console.log(response))
            .then(response => getPBIs());   
    }

    /**
     * Function for editing existing PBIs
     */
    function editPBI(pbiData) {
        // console.log("mlem")
        fetch("api/pbis/" + pbiData.pbi_id + "/", {
            method: "PATCH",

            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(pbiData)
        })
            
            .then(response=> response)
            .then(response => console.log(response))
            .then(response => getPBIs())
        
    }

    /**
     * Function for creating new PBI and adding it to the database
     */
    function addPBI(newPBIData) {
        fetch("api/pbis/", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPBIData)
        })

            .then(response => response)
            .then(response => console.log(response))
            .then(response => getPBIs())
    }


    /**
     * React Lifecycle hook for getting PBIs prior to rendering the page
     */
    useEffect(() => {
        getPBIs();
    }, []);

    return (    
        <Fragment>

            <BacklogDialog openDialog={pbiDialog} setDialog={setPBIDialog} addPBI={addPBI}/>

            <Typography variant="h4">
                Sprint Backlog
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
                            <Grid item>
                                <BacklogItem
                                    pbiData={item}
                                    key={item.pbi_id}
                                    deletePBI={deletePBI}
                                    editPBI={editPBI}
                                />
                            </Grid>
                            
                        );
                    })}

                    <Button
                        onClick={() => {
                            setPBIDialog(true);
                        }}
                        disableFocusRipple
                    >
                        Add a PBI
                    </Button>



                </Paper>

            </Grid>
        </Fragment>
    );
}