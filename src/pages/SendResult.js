import React, { useEffect, useState } from "react";
import api from "../api/ProtectedApi";

function SendResult() {
  const options = [
    { value: "1", label: `Semester 1` },
    { value: "2", label: `Semester 2` },
    { value: "3", label: `Semester 3` },
    { value: "4", label: `Semester 4` },
    { value: "5", label: `Semester 5` },
    { value: "6", label: `Semester 6` },
    { value: "7", label: `Semester 7` },
    { value: "8", label: `Semester 8` },
  ];

  const [semExamObj,setSemExamObj] = useState({
    exam:"IM",
    sem : "1"
  })
  const currYear = new Date();
  const [year,setYear] = useState(currYear.getFullYear());

  const handleSubmit = async(e)=>{
    e.preventDefault()
    const data = {
      exam:semExamObj.exam,
      semester:semExamObj.sem,
      year:year,
    }
    try{
      const response = await api.post("eval/send-result/",data);
      alert(response.data.message)
    }
    catch(err){
      alert(err.response.data.message)
    }
  }

  return (
    <form className="ScanningPageContainer" onSubmit={handleSubmit}>
      <div style={{margin:"0.4rem 0"}}>
        <label htmlFor="exam">Select Exam:</label>
        <select
          name="exam"
          id="exam"
          onChange={(e) => {
            setSemExamObj({
              ...semExamObj,
              exam:e.target.value
            })
          }}
        >
          <option value="IM">Intermediate</option>
          <option value="MS">Mid-Sem</option>
          <option value="ES">End-Sem</option>
        </select>
      </div>
      <div style={{margin:"0.4rem 0"}}>
        <label htmlFor="sem">Select Semester:</label>
        <select
          name="sem"
          id="sem"
          onChange={(e) => {
            setSemExamObj({
              ...semExamObj,
              sem:e.target.value
            })
          }}
        >
          {options.map((item, idx) => {
            return (
              <option value={`${item.value}`} key={`semester${idx}`}>
                {item.label}
              </option>
            );
          })}
        </select>
      </div>
      <input type="number" placeholder="Select Year" value={year} onChange={(e)=>{setYear(e.target.value)}}/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default SendResult;
