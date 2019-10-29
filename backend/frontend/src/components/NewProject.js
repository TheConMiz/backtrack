import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import { Link } from 'react-router-dom';



const useStyles = makeStyles({
    card: {
      width: 300,
      height: 500,
      background: 'linear-gradient(45deg, #909090 30%, #686868 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(90, 90, 90, .3)',
      display: 'inline-block',
      marginRight: 100,
      alignItems:"center",
      paddingLeft:40,
    },
  });
function NewProject(){
    const classes = useStyles();

    return(
        <div>
            <h1>Create a New Project</h1>
            <Card className={classes.card}>
            <form noValidate autoComplete="off">
            <TextField
                id="project-name"
                label="Project Name"
               // onChange={handleChange('name')}
                margin="normal"
             />
             <br></br>
             <TextField
                id="project-description"
                label="Description"
               // onChange={handleChange('name')}
                margin="normal"
             />
             <br></br>

             <TextField
                id="project-owner"
                label="Project Owner"
               // onChange={handleChange('name')}
                margin="normal"
             />
<           br></br>
            <TextField
                id="project-link"
                label="Project Link"
               // onChange={handleChange('name')}
                margin="normal"
             /> 
            <br></br>
            <TextField
                id="project-manager"
                label="Project Manager"
               // onChange={handleChange('name')}
                margin="normal"
             /> 
            <br></br>
            <TextField
                id="project-add-member"
                label="Add Project Member"
               // onChange={handleChange('name')}
                margin="normal"
             /> 
              
            </form>
            <br></br>
            <CardActions>
                <Button size="small" component={Link} to="/homepage">Save</Button>
            </CardActions>
            </Card>
        </div>

    );
}

export default NewProject;