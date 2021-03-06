import React from 'react'
import {Outlet,Navigate} from "react-router-dom";

function PrivateRoute() {
    const user = localStorage.token ? true : false;
    return user ? <Outlet/> : <Navigate to="/login"/>
}

export default PrivateRoute