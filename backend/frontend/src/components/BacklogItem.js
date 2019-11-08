import React, { Fragment, useState } from 'react';

import { Card, CardContent, Typography, IconButton, Icon, Grid, TextField, Button } from '@material-ui/core';

import Edit from '@material-ui/icons/Edit'
import {Link} from 'react-router-dom'

import RightArrow from '@material-ui/icons/ArrowRight';
import Delete from '@material-ui/icons/Delete';

function BacklogItem(props) {

    /**
     * React State variables, and setter functions
     */
    const [editable, setEditable] = useState(false);

    const [currentName, setName] = useState(props.pbiData.name);
    const [currentDesc, setDesc] = useState(props.pbiData.desc);
    const [currentCost, setCost] = useState(props.pbiData.story_pts);
    // const [currentStatus, setStatus] = useState(props.pbiData.story_pts);

    // TODO: DO PRIORITY SORTING
    return (
        <Fragment>
            
            <Card>
            
                <CardContent>

                    <Grid container direction="column" spacing={4} >

                        <Grid item>
                            <TextField
                                label="Name"
                                value={currentName}
                                disabled={!editable}
                                onChange={(event) => {
                                    setName(event.target.value)
                                }}

                            />
                        </Grid>

                        <Grid item>
                            <TextField
                                label="Estimated Cost"
                                type="number"
                                value={currentCost}
                                disabled={!editable}

                                onChange={(event) => {
                                    setCost(event.target.value)
                                }}
                            />
                            
                        </Grid>

                        <Grid item>
                            <TextField
                                label="Description"
                                value={currentDesc}
                                disabled={!editable}

                                onChange={(event) => {
                                    setDesc(event.target.value)
                                }}
                            />
                        </Grid>     

                    </Grid>

                    <Grid container direction="row">

                        <Grid item>
                            <IconButton
                                size="small"
                                disableFocusRipple
                                onClick={() => {
                                    props.deletePBI(props.pbiData.pbi_id)
                                }}
                            >
                                <Icon>
                                    <Delete />
                                </Icon>
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton
                                disableFocusRipple
                                disabled={editable}
                                size="small"
                                onClick={() => {
                                    setEditable(true)
                                }}
                            >
                                <Icon>
                                    <Edit/>
                                </Icon>
                            </IconButton>
                        </Grid>

                        <Grid item>
                            <Button
                                disabled={!editable}
                                onClick={() => {
                                    setEditable(false)

                                    props.editPBI({
                                        ...props.pbiData,
                                        name: currentName,
                                        story_pts: currentCost,
                                        desc: currentDesc
                                    })
                                }}
                            >
                                Save
                            </Button>
                        </Grid>

                    </Grid>

                </CardContent>
            </Card>
        </Fragment>
    );
}
export default BacklogItem;