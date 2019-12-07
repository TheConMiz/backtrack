import React, {useEffect, Fragment} from 'react'
import { Button, Typography } from "@material-ui/core"

export default function LogoutButton(props) {

    const logOut = () => {
        // fetch("api/auth/logout", {
        //     method: "GET",
        //     headers: {
        //         "Authorization": "Token " + localStorage.getItem("myToken")
        //     },
        // })

        //     .then(response => {
        //         if (response.status != 200) {
        //             console.log("Something went wrong. logout", response)
        //         }

        //         else {
        //             return response.json()

        //             .then(response => {
        //                 localStorage.removeItem("myToken")
        //                 props.setIsAuth(false)
        //             })
        //         }
        //     })

        localStorage.removeItem("myToken")
        props.setIsAuth(false)
    }

    if (props.isAuth) {
        return (
            <Redirect to="/"/>
        )
    }

    
    return (
        <Button
            disableFocusRipple
            variant="outlined"
            onClick={() => {
                logOut()
            }}
        >
            <Typography>
                Logout
            </Typography>
        </Button>
    )
}
