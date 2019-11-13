import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';

class AddTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            desc: '',
            story_points:'',
            //priority:'',
            status:'',
            pbi_id:'',
            task_id:'',
        };
      }
    render() {
        function addTask(newTaskData) {
            fetch("api/tasks/", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newTaskData)
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
        function handleStoryPoints(e){
            this.setState({ story_points: e.target.value })
        } 
        function handlePriority(e){
            this.setState({ priority: e.target.value })
        } 
 
        function handleStatus(e){
            this.setState({ status: e.target.value })
        } 
 
        return(
            
            <div>

            <Fragment >
            <Typography variant="h4">
               Add Task
            </Typography>
            <br></br>
            <Card  >
            <form noValidate autoComplete="off">
            <TextField
                id="task-name"
                label="Task Name"
                value={this.state.name}
                onChange={handleName.bind(this)}
                margin="normal"
             />
             <br></br>
             <TextField
                id="task-description"
                label="Description"
                value = {this.state.desc}
                onChange={handleDesc.bind(this)}
                margin="normal"
             />
             <br></br>

             <TextField
                id="task-stry"
                label="Story Points"
                value={this.state.story_points}
                onChange={handleStoryPoints.bind(this)}
                margin="normal"
             />
<           br></br>
  
            <br></br>
            <TextField
                id="task-status"
                label="Task Status"
                value={this.state.status}
                onChange={handleStatus.bind(this)}
                margin="normal"
             /> 
              
            </form>
            <br></br>
            <CardActions>
                

                <Button component={Link} to="/backlog_view" onClick={() => {
                        addTask({
                            name: this.state.name,
                            desc: this.state.desc,
                            story_points: this.state.story_points,
                            //priority: this.state.priority,
                            status: this.state.status,
                            pbi_id:9,
                            task_id:2,
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

export default AddTask;