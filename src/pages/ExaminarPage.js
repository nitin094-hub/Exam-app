import React, { useState } from "react";
import QrCodeScanner from "../component/QrCodeScanner";
import api from "../api/ProtectedApi";

function ExaminarPage() {
  const [openScanner, setOpenScanner] = useState(false);
  const [ScannedData, setScannerData] = useState("");
  const [marks,setMarks] = useState("")

  const handleOpenScanner = (e)=>{
    e.preventDefault();
    setOpenScanner(true)
  }
  const handleSubmit = async(e)=>{
    if(!marks.length || !ScannedData.length){
      e.preventDefault();
      alert("Please Enter Valid Credentials");
      return;
    }
    const data = {
      answersheet : ScannedData,
      marks : parseInt(marks),
      examiner : localStorage.getItem("userId"),
    }
    try{
      const response = await api.post("eval/add-marks/",data);
    }
    catch(err){
      console.log(err.response)
    }
  }

  return (
    <form className="ScanningPageContainer" onSubmit={handleSubmit}>
      {openScanner && (
        <QrCodeScanner
          setInputScanner={setScannerData}
          setIsOpenScanner={setOpenScanner}
        />
      )}
      <input
        type="text"
        value={ScannedData}
        placeholder="AnswerSheet Id"
        disabled
        required
      />
      <input type="text" placeholder="Enter Marks" value={marks} onChange = {(e)=>{setMarks(e.target.value)}}/>
      <button className="StudentScanner" style={{marginTop:"0.5rem"}} onClick={(e)=>handleOpenScanner(e)}>Scan AnswerSheet Id</button>
      <button type="submit" style={{width:"9rem",marginTop:"0.5rem"}}>Submit</button>
    </form>
  );
}

export default ExaminarPage;
