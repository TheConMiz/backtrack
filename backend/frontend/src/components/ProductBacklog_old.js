import React, { Fragment, useState, useEffect } from 'react';

import ProductBacklogItem from './ProductBacklogItem';

import { Typography, Paper, Grid } from '@material-ui/core';
import { Button } from '@material-ui/core'; 
import BacklogDialog from './BacklogDialog';
import { Link } from 'react-router-dom';

export default function SprintBacklog() {
    
    const [pbis, pbiToState] = useState([]);
    const [pbiDialog, setPBIDialog] = useState(false);
   // const [projectId, setId] = useState(this.props.projectData.p_id);

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
     * Function for deleting a given PBI. Passed as props to each ProductBacklogItem
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
        fetch("api/pbis/" + pbiData.id + "/", {
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
                            <Grid item>
                                <ProductBacklogItem
                                    pbiData={item}
                                    key={item.id}
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
                    
                    <Button size="small" component={Link} to="/homepage">Home</Button> <br></br>


                </Paper>

            </Grid>
        </Fragment>
    );
}