import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    card: {
      width: 300,
      height: 250,
      background: 'linear-gradient(45deg, #909090 30%, #686868 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(90, 90, 90, .3)',
      display: 'inline-block',
      marginRight: 100,
      alignItems:"center",
    },
  });
function HomeView2() {
    const classes = useStyles();
    
  
    return (
        <Fragment>
            <h1>Home Page</h1>
           
            <Card className={classes.card}>
            <CardContent>
                    <Typography color="textSecondary"align="center">
                        Project Name:         
                    </Typography>
                    <Typography color="textSecondary"align="center">
                        Description:              
                    </Typography>
                    <Typography color="textSecondary"align="center">
                        Manager:              
                    </Typography>
             </CardContent>
                    <CardActions>
                    <Button size="small" component={Link} to="/backlog_view">View Backlog</Button>
                        <Button size="small" component={Link} to="/project_board">Scrum Board</Button>
              </CardActions>
            </Card>
        </Fragment>
      
    );
  }

export default HomeView2;