import React, { useState } from 'react'
import "../styles/SelectLogin.css";
import api from "../api/ProtectedApi"
import { useNavigate,Link } from 'react-router-dom';

function SelectLogin() {

  const navigate = useNavigate();

  const handleInvigilator = async()=>{
    try{
      const response = await api.get("exam/get-exam/");
      localStorage.setItem("examId",response.data.exam_id);
      navigate("/scan-qr")
    }
    catch(err){
      alert(err.response.data.message)
    }
  }

  return (
    <div className="LoginUser">
        <button onClick={handleInvigilator}>Invigilator</button>
        <button>Examinar</button>
        {
          localStorage.getItem("isAdmin") && 
          <Link to={"/send-result"}>

            <button>Send Result</button>
          </Link>
        }
    </div>
  )
}

export default SelectLogin