import React, { Fragment, useState } from 'react';

import MainPage from './MainPage';
import NewProject from './NewProject';
import HomeView from './HomeView';
import ProjectBoard from './ProjectBoard';


import {Switch, Route} from 'react-router';

function App() {
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

                
            </Switch>

        </Fragment>
    );
}

export default App;