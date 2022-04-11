import React, { useEffect, useRef, useState } from "react";
import { QrReader } from "react-qr-reader";
import QrCodeScanner from "../component/QrCodeScanner";
import "../styles/ScanningPage.css";
import api from "../api/ProtectedApi";

function ScanningPage() {

  const [isStudentScannerOpen,setIsStudentScannerOpen] = useState(false);
  const [isAnswerSheetScannerOpen,setIsAnswerSheetScannerOpen] = useState(false);
  const [studentid,setStudentId] = useState("");
  const [answerSheetid,setAnswerSheetId] = useState("");

  const handleOpenScanner = (e,scannerType)=>{
    e.preventDefault();
    if(scannerType === "student"){
      setIsStudentScannerOpen(true)
    }
    else{
      setIsAnswerSheetScannerOpen(true)

    }
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    const data = {
      student : studentid,
      answersheet : answerSheetid,
      invigilator:localStorage.getItem("userId"),
      exam : localStorage.getItem("examId")
    }
    try{
      const response = await api.post("exam/add-student-answersheet/",data);
      console.log(response)
    }
    catch(err){
      const errMsg = err.response.data.student ? `Student Id : ${err.response.data.student[0]}` : `AsnwerSheet Id : ${err.response.data.answersheet[0]}`
      alert(errMsg)
    }
  }

  return (
    <>
      <form className="ScanningPageContainer" onSubmit={handleSubmit}>
        {
          isStudentScannerOpen && 

        <QrCodeScanner setInputScanner= {setStudentId} setIsOpenScanner={setIsStudentScannerOpen}/>
        }
        {
          isAnswerSheetScannerOpen && 
        <QrCodeScanner setInputScanner= {setAnswerSheetId} setIsOpenScanner={setIsAnswerSheetScannerOpen}/>
        }
        <input type="text" value={studentid} placeholder="Student Id" disabled  required/>
        <input type="text" value={answerSheetid} placeholder="AnswerSheet Id" disabled required/>
        <div className="ScanningBtn">
          <button className="StudentScanner" onClick={(e)=>handleOpenScanner(e,"student")}>Scan Student Id</button>
          <button className="StudentScanner" onClick={(e)=>handleOpenScanner(e,"answer")}>Scan AnswerSheet Id</button>
          <button type="submit" >Submit</button>
        </div>
      </form>
    </>
  );
}

export default ScanningPage;
