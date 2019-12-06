import React, { Fragment, useState } from 'react';

import { Switch, Route } from 'react-router';

import LoginPage from './LoginPage'
import HomeView from './HomeView';
import ProjectBoard from './ProjectBoard';
import BacklogView from './BacklogView';
import ProductBacklog from './ProductBacklog';
import ProtectedRoute from './ProtectedRoute';

export default function App(props) {

    const [isAuth, setIsAuth] = useState(false)
    const [incorrectAuth, setIncorrectAuth] = useState(false)

    const [userInfo, setUserInfo] = useState({
        id: -1,
        name: "",
        email: "",
        type: -1
    })

    const checkUserSignedIn = () => {
        if (localStorage.getItem("myToken") !== null) {
            setIsAuth(true)
            getUserInfo(localStorage.getItem("myToken"))
        }
    }

    
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
                    console.log("Something went wrong. getUserInfo")
                }

                else {
                    return response.json()
                    .then(response => {
                        
                        // console.log(response)

                        let temp = Object.assign(userInfo, {
                            id: response.id,
                            name: response.first_name + " " + response.last_name,
                            email: response.email,
                            type: response.type
                        })

                        setUserInfo(temp)
                    })   
                }
            })  
    }

    const authenticateUser = (userCredentials) => {
        fetch("api/auth/login",
            {
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
                        })
                }
            })
        getUserInfo(localStorage.getItem("myToken"))
    }
    
    return (
        <Switch>
            <ProtectedRoute
                exact
                path="/"
                component={HomeView}
                isAuth={isAuth}
                userInfo={userInfo}
            />

            <ProtectedRoute
                exact
                path="/project_board"
                component={ProjectBoard}
                isAuth={isAuth}
                userInfo={userInfo}
            />

            <ProtectedRoute
                exact
                path="/backlog_view"
                component={BacklogView}
                isAuth={isAuth}
                userInfo={userInfo}
            />

            <ProtectedRoute
                exact
                path="/product_backlog"
                component={ProductBacklog}
                isAuth={isAuth}
                userInfo={userInfo}
            /> 
            
            <Route
                exact
                path="/login"
                render={() =>
                    <LoginPage
                        setIsAuth={setIsAuth}
                        isAuth={isAuth}
                        authenticateUser={authenticateUser}
                        checkUserSignedIn={checkUserSignedIn}
                    />
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
                path="/task"
                render={() => 
                    <AddTask/>
                }
            />
             
        </Switch>
    );
}