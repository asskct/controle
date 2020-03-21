import React  from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from "react-router-dom"

const AuthRoute = ({ component: Component, exact, path, ...rest }) => {
    
    const isAuth = localStorage.getItem("userProvider")
    const user = useSelector(state => state.auth.user)
    return (
        (!!user.lenght) || (!!isAuth) ? (
        <Route
            exact={exact}
            path={path}
            render={props => (<Component {...props} {...rest} />)}/>
        ) : (
            <Redirect to={{ pathname: "/login", state: { from: rest.location } }}/>
        )    
    )   
}

export default AuthRoute