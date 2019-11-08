import React, { Fragment, useState } from 'react';

import { Switch, Route } from 'react-router';

import MainPage from './MainPage'
import NewProject from './NewProject';
import HomeView from './HomeView';
import ProjectBoard from './ProjectBoard';
import BacklogView from './BacklogView';
import AddTask from './AddTask';

function App() {
    return (
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
                path="/homepage"
                render={() => 
                    <HomeView/>
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
                path="/task"
                render={() => 
                    <AddTask/>
                }
            />

        </Switch>
    );
}

export default App;