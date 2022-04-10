import React from 'react'
import {Outlet,Navigate} from "react-router-dom";

function PrivateRoute() {
    const user = true;
    return user ? <Outlet/> : <Navigate to="/login"/>
}

export default PrivateRoute