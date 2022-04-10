import React from "react";
import "../styles/Login.css"

function Login() {
  return (
    <div className="LoginContainer">
      <h1 style={{textAlign:"center",margin:"0"}}>Login</h1>
      <form action="" className="loginForm">
        <input type="text" placeholder="UserName"/>
        <input type="password" placeholder="Password"/>
        <button type="submit" style={{margin:"auto",display:"block"}}>Submit</button>
      </form>
    </div>
  );
}

export default Login;
