import React, { Fragment, useState } from 'react';

import MainPage from './MainPage';
import NewProject from './NewProject';
import HomeView from './HomeView';
import HomeView2 from './HomeView2';
import ProjectBoard from './ProjectBoard';


import {Switch, Route} from 'react-router';
import BacklogView from './BacklogView';
import PBIDetails from './PBIDetails';
import AddTask from './AddTask';

function App() {

    const test = {
        "Developer": {
            "e_id": "",
            "name": "",
        },

        "PBI": {
            "pbi_id": "",
            "project_id": "",
            "name": "",
            "desc": ""
        },

        "Manager": {
            "e_id": "",
            "name": "",
        },

        "Project": {
            "p_id": "",
            "owner_id": "",
            "manager_id": "",
            "date_created": "",
            "last_modified": "",
            "name": "",
            "desc": "",
        },

        "Task": {
            "task_id": "",
            "pbi_id": "",
            "name": "",
            "desc": "",
            "status": ""
        }
    }

    return (
        <Fragment>

            <Switch>
                <Route
                    exact
                    path="/"
                    render={() =>
                        <MainPage/>
                    }
                />

                <Route
                    exact
                    path="/homepage2"
                    render={() => 
                        <HomeView/>
                    }
                />  
                <Route
                    exact
                    path="/homepage"
                    render={() => 
                        <HomeView2/>
                    }
                />                   

                <Route
                    exact
                    path="/new_project"
                    render={() => 
                        <NewProject/>
                    }
                />

                <Route
                    exact
                    path="/project_board"
                    render={() => 
                        <ProjectBoard/>
                    }
                />

                <Route
                    exact
                    path="/backlog_view"
                    render={() => 
                        <BacklogView/>
                    }
                />

                <Route
                    exact
                    path="/pbi"
                    render={() => 
                        <PBIDetails/>
                    }
                />

                <Route
                    exact
                    path="/task"
                    render={() => 
                        <AddTask/>
                    }
                />


                
            </Switch>

        </Fragment>
    );
}

export default App;