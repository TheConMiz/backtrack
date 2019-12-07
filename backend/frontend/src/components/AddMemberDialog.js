import React, { useState, useEffect, Fragment } from 'react';

import { Dialog, DialogTitle, Typography, DialogActions, DialogContent, TextField, Button, Table, TableRow, TableCell, Checkbox, TableBody } from '@material-ui/core';

function AddMemberDialog(props) {

    /**
     * State variables and setters.
     */
    const [email, setEmail] = useState("");
    const [selectedUsers, setSelectedUsers] = useState([]);


    /**
     * Function that resets states, to be used upon Confirming or Cancelling
     */
    function resetStates() {
        setEmail("");
    }

    const addProjectDevelopers = (selectedDevelopers, projectData) => {
        console.log(selectedDevelopers, projectData)

        let values = []

        let selectedDevelopersArray = Array.from(selectedDevelopers)

        selectedDevelopersArray.map((item, index) => {
            values.push(Object.assign({}, {
                project_id: projectData.id,
                dev_id: item
            }))
        })

        values.map((item, index) => {
            fetch("api/project_developers/", {
                    method: "POST",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(item)
                })

                .then(response => response.json())
                .then(response => props.getProjectDevelopers())
        })
    }

    
    return (
        <Fragment>
            <Dialog
                open={props.openDialog}
                onClose={() => { 
                    props.setDialog(false);
                }}

                disableBackdropClick
                disableEscapeKeyDown
            >
                <DialogTitle>
                    {"Add a Developer"}
                </DialogTitle>

                <DialogContent>
                    <Table>
                        <TableBody>
                            {   
                                
                                props.users.filter(item => item.type === 1 && item.id !== props.userInfo.id).map((item, index) => {
                                  
                                    return (
                                        <TableRow
                                            key={index}
                                        >
                                            <TableCell padding="checkbox">
                                                <Checkbox
                                                    
                                                    onChange={() => {
                                                        setSelectedUsers([...selectedUsers, item.id])
                                                    }}
                                                />
                                            </TableCell>
                                            <TableCell padding="checkbox">
                                                <Typography>
                                                    {item.first_name + " " + item.last_name}
                                                </Typography>
                                            </TableCell>
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>

                </DialogContent>

                <DialogActions>
                    <Button
                        disabled={selectedUsers.length === 0 ? true : false}
                        onClick={() => {
                            addProjectDevelopers(new Set(selectedUsers), props.projectData)
                            // props.add
                            // props.addMember({
                            //     email: email
                            // });

                            resetStates();
                            props.setDialog(false);
                        }}
                    >
                        Add
                    </Button>

                    <Button
                        onClick={() => {
                            resetStates();
                            
                            props.setDialog(false);
                        }}
                    >
                        Cancel
                    </Button>

                </DialogActions>
            </Dialog>
        </Fragment>
    );
}

export default AddMemberDialog;