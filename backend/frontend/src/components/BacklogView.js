import React, { Fragment, useState, useEffect } from 'react';

import BacklogItem from './BacklogItem';
import BacklogDialog from './BacklogDialog';

import { Typography, Paper, Grid } from '@material-ui/core';
import { Button } from '@material-ui/core'; 
import { Link } from 'react-router-dom';

export default function BacklogView() {
    
    const [pbis, pbiToState] = useState([]);
    const [PBIsInSprint, setPBIsInSprint] = useState([]);
    const [pbiIds, setPBIIds] = useState([]);
    
    /**
  
     * Function for making a GET request for the PBIs in Sprint
     */
    function getPBIIDs() {
        var completeData =[]
        fetch("api/pbisinsprint/")

            .then(response => {

                if (response.status != 200) {
                    console.log("Something went wrong!");
                }

                return response.json()
              
            })

            .then(data => {
                setPBIIds(data);
                data.map((item) => {
                    console.log("looop");
                    console.log(item); 
        
                   fetch("api/pbis/"+item.pbi_id)

                   .then(response => {
       
                       if (response.status != 200) {
                           console.log("Something went wrong!");
                       }
       
                       return response.json()
                   })
       
                   .then(data2 => {
                       completeData = completeData.concat(data2);
                       console.log("complete");
                       console.log(completeData);
               
                      setPBIsInSprint(completeData);
                      
                   });
                    
                });
            })  
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
            
        
    }


    /**
     * React Lifecycle hook for getting PBIs prior to rendering the page
     */
    useEffect(() => {
      
        getPBIIDs();
       
        
    }, []);
    
    return (    
     
        <Fragment>
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

                    {PBIsInSprint.map((item) => {
                        return (
                            <Grid item>
                                <BacklogItem
                                    pbiData={item}
                                    key={item.id}
                                    editPBI={editPBI}
                                />
                            </Grid>
                            
                        );
                    })}

                   
                    <Button size="small" component={Link} to="/homepage">Home</Button> <br></br>


                </Paper>

            </Grid>
        </Fragment>
    );
}