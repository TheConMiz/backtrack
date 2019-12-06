import React, { Fragment, useState } from 'react';

import { Switch, Route, Redirect } from 'react-router';

import LoginPage from './LoginPage'
import NewProject from './NewProject';
import HomeView from './HomeView';
import ProjectBoard from './ProjectBoard';
import BacklogView from './BacklogView';
import AddTask from './AddTask';
import ProductBacklog from './ProductBacklog';
import ProtectedRoute from './ProtectedRoute';

export default function App(props) {

    const [isAuth, setIsAuth] = useState(false)
    const [incorrectAuth, setIncorrectAuth] = useState(false)
    const [userInfo, setUserInfo] = useState(
        {
            name: "",
            email: "",
            type: 0,
        }
    )

    const getUserInfo = (token) => {
        console.log(token)
        fetch("api/auth/user", {
            method: "GET",
            headers: {
                "Authorization": "Token " + token   
            },
            
            
        })
            .then(response => {
                if (response.status != 200) {
                    console.log("Something went wrong")
                }

                else {
                    return response.json()
                    .then(response => {
                        console.log(response)
                        setUserInfo({
                            name: "",
                            email: response.email,
                            type: response.type
                        })

                        console.log(userInfo)
                    })
                    
                }
                
            })
            
    }

    const authenticateUser = (userCredentials) => {
        fetch("api/auth/login", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userCredentials)
        })

            .then(response => {
                if (response.status != 200) {
                    
                    console.log("Something went Wrong")
                    setIncorrectAuth(true)
                }

                else {
                    
                    return response.json()
                    
                    .then((response) => {
                        setIsAuth(true)
                        setIncorrectAuth(false)
                        localStorage.setItem("myToken", response.token)
                        getUserInfo(response.token)
                    })
                }

                
            })
            
    }
    
    return (
        <Switch>

            <ProtectedRoute
                exact
                path="/"
                component={HomeView}
                isAuth={isAuth}
            />

            <ProtectedRoute
                exact
                path="/project_board"
                component={ProjectBoard}
                isAuth={isAuth}
            />

            <ProtectedRoute
                exact
                path="/backlog_view"
                render={() => 
                    <BacklogView/>
                }
                isAuth={isAuth}
            />

            <ProtectedRoute
                exact
                path="/product_backlog"
                render={() => 
                    <ProductBacklog/>
                }
                isAuth={isAuth}
            /> 
            
            <Route
                exact
                path="/login"
                render={() =>
                    <LoginPage
                        authenticateUser={authenticateUser}
                        isAuth={isAuth}
                        incorrectAuth={incorrectAuth}
                    />
                }
            />
            
            {/*             

            <Route
                exact
                path="/new_project"
                render={() => 
                    <NewProject/>
                }
            />

            <Route
                exact
                path="/task"
                render={() => 
                    <AddTask/>
                }
            />*/}
             
        </Switch>
    );
}