import React from 'react'

import { Route, Redirect } from 'react-router'

export default function ProtectedRoute(props) {
        
    return (
        <Route
            path={props.path}
            exact={props.exact}
            render={() => {
                if (props.isAuth) {
                    console.log("Authenticated")
                    return (
                        <props.component
                            userInfo={props.userInfo}
                        />
                    )
                }

                else {
                    console.log("Not authenticated")
                    return (
                        <Redirect to="/login"/>
                    )
                }   
            }}
            
        />
    )
}
