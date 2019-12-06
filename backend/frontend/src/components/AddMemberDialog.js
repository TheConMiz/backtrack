import React, { useState, useEffect, Fragment } from 'react';

import { Dialog, DialogTitle, Typography, DialogActions, DialogContent, TextField, Button, Grid} from '@material-ui/core';

function AddMemberDialog(props) {

    /**
     * State variables and setters.
     */
    const [email, setEmail] = useState("");


    /**
     * Function that resets states, to be used upon Confirming or Cancelling
     */
    function resetStates() {
        setEmail("");
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

                    <Grid container direction="row" spacing={4}>


                        <Grid item>
                            <TextField
                                label="Email ID"
                                value={email}
                                onChange={(event) => {
                                    setEmail(event.target.value)
                                }}
                            />
                        </Grid>

                       
                    </Grid>

                </DialogContent>

                <DialogActions>
                    <Button
                        onClick={() => {
                            // props.add
                            props.addMember({
                                email: email
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

export default AddMemberDialog;