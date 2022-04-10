import React from 'react'
import "../styles/SelectLogin.css";

function SelectLogin() {
  return (
    <div className="LoginUser">
        <button>Admin</button>
        <button>Invigilator</button>
        <button>Examinar</button>
    </div>
  )
}

export default SelectLogin