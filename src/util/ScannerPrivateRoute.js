import React from 'react'
import {Outlet,Navigate} from "react-router-dom";

function PrivateRoute() {
    const user = localStorage.examId ? true : false;
    return user ? <Outlet/> : <Navigate to="/select-login"/>
}

export default PrivateRoute