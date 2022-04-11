import React, { useEffect, useRef, useState } from "react";
import "../styles/Login.css";
import api from "../api/UnProtectedApi";
import {useNavigate} from "react-router-dom";

function Login() {
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });
  const [erroMsg, setErrorMsg] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("api-token-auth/", loginDetails);
      localStorage.setItem("token",response.data.token);
      localStorage.setItem("userId",response.data.user_id);
      localStorage.setItem("examId",response.data.exam_id);
      localStorage.setItem("isAdmin",response.data.is_admin);
      navigate("/select-login")
    } catch (err) {
      setErrorMsg(err.response.data.non_field_errors[0]);
      setLoginDetails({
        username: "",
        password: "",
      });
    }
  };


  return (
    <div className="LoginContainer">
      {erroMsg && <h4>{erroMsg}</h4>}
      <h1 style={{ textAlign: "center", margin: "0" }}>Login</h1>
      <form className="loginForm" onSubmit={handleSubmit}>
        <input
        type="text"
        onFocus={()=>{setErrorMsg(false)}}
        value={loginDetails.username}
        onChange={(e) => {
            return setLoginDetails({
              ...loginDetails,
              username: e.target.value,
            });
          }}
          placeholder="Username"
        />
        <input
          type="password"
          onFocus={()=>{setErrorMsg(false)}}
          value={loginDetails.password}
          onChange={(e) => {
            return setLoginDetails({
              ...loginDetails,
              password: e.target.value,
            });
          }}
          placeholder="Password"
        />
        <button type="submit" style={{ margin: "auto", display: "block" }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
