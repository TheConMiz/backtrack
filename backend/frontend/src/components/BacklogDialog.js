import React, { useState, useEffect, Fragment } from 'react';

import { Dialog, DialogTitle, Typography, DialogActions, DialogContent, TextField, Button, Grid} from '@material-ui/core';
import BacklogItem from './BacklogItem';

function BacklogDialog(props) {

    /**
     * State variables and setters.
     */
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [cost, setCost] = useState(0);
    const [priority, setPriority] = useState(0);


    /**
     * Function that resets states, to be used upon Confirming or Cancelling
     */
    function resetStates() {
        setName("");
        setDesc("");
        setCost(0);
        setPriority(0);
    }

    /**
     * TODO: Project ID to be set based on which one user is working on
     */
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
                    {"Add a PBI"}
                </DialogTitle>

                <DialogContent>

                    <Grid container direction="row" spacing={4}>


                        <Grid item>
                            <TextField
                                label="PBI Name"
                                value={name}
                                onChange={(event) => {
                                    setName(event.target.value)
                                }}
                            />
                        </Grid>

                        <Grid item>
                            <TextField
                                label="Estimated Cost"
                                type="Number"
                                value={cost}
                                onChange={(event) => {
                                    setCost(event.target.value)
                                }}
                            />
                        </Grid>
                    </Grid>

                    <Grid container spacing={4}>
                        <Grid item>
                            <TextField
                                label="Description"
                                value={desc}
                                
                                onChange={(event) => {
                                    setDesc(event.target.value)
                                }}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                label="Priority"
                                type="number"
                                value={priority}
                                onChange={(event) => {
                                    setPriority(event.target.value)
                                }}
                            />
                        </Grid>
                    </Grid>

                </DialogContent>

                <DialogActions>
                    <Button
                        onClick={() => {
                            // props.add
                            props.addPBI({
                                name: name,
                                desc: desc,
                                story_pts: cost,
                                project_id :1,
                                priority:priority,
                                status:1,
                            });

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

export default BacklogDialog;