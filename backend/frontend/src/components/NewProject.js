import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';

class NewProject extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            desc: '',
            owner:'',
            manager:'',
        };
    }
    
    render() {
        function addProject(newProjectData) {
            fetch("api/project/", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newProjectData)
            })
    
                .then(response => response)
                .then(response=> console.log(response))
        }
    
        function handleName(e){
            this.setState({ name: e.target.value })
        } 
        function handleDesc(e){
            this.setState({ desc: e.target.value })
        } 
        function handleOwner(e){
            this.setState({ owner: e.target.value })
        } 
        function handleManager(e){
            this.setState({ manager: e.target.value })
        } 
 
        return(
            
            <div>

            <Fragment >
            <Typography variant="h4">
               Create New Project
            </Typography>
            <br></br>
            <Card  >
            <form noValidate autoComplete="off">
            <TextField
                id="project-name"
                label="Project Name"
                value={this.state.name}
                onChange={handleName.bind(this)}
                margin="normal"
             />
             <br></br>
             <TextField
                id="project-description"
                label="Description"
                value = {this.state.desc}
                onChange={handleDesc.bind(this)}
                margin="normal"
             />
             <br></br>

             <TextField
                id="project-owner"
                label="Project Owner"
                value={this.state.owner}
                onChange={handleOwner.bind(this)}
                margin="normal"
             />
<           br></br>
            <TextField
                id="project-manager"
                label="Project Manager"
                value={this.state.manager}
                onChange={handleManager.bind(this)}
                margin="normal"
             /> 
            <br></br>
            <TextField
                id="project-add-member"
                label="Add Project Member"
                margin="normal"
             /> 
              
            </form>
            <br></br>
            <CardActions>
                

                <Button component={Link} to="/homepage" onClick={() => {
                        addProject({
                            date_created: "2019-11-08T08:46:49Z",
                            last_modified: "2019-11-08T08:46:49Z",
                            name: this.state.name,
                            desc: this.state.desc,
                            owner_id: this.state.owner,
                            manager_id: this.state.manager,
                        })
                    }}>
                        Submit
                    </Button>

            </CardActions>
            </Card>
            </Fragment>
            </div>
        );
    }
}

export default NewProject;