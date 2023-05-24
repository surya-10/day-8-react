import React, { useState } from "react";
import Base from "../base/base";
import { useNavigate } from "react-router-dom";



function AddStudents({students, setStudents}){
    let navigate = useNavigate();
    let [name, setName] = useState("");
    let [age, setAge] = useState("");
    let [gender, setGender] = useState("");
    let [city, setCity] = useState("");
    let [edu, setEdu] = useState("");
    let [ocu, setOcu] = useState("");
    let [studId, setStudId] = useState("");
    let [sal, setSal] = useState("");

    function addData(){
        let obj = {
            name,
            age,
            education:edu,
            city,
            occupation: ocu,
            sal,
            gender,
            id: studId
        }
        setStudents([...students, obj])
        navigate("/students-data")
        // console.log(obj);
        setName("");
        setAge("");
        setGender("");
        setCity("");
        setEdu("");
        setOcu("");
        setSal("");
        setStudId("");
    }
    return (
        <Base
        name={"New Data"}
        para2={"Please fill below details to create new Student data"}>
        <div className="add-stu-div">
            <h3>Please fill all below details</h3>
            <div className="inputs">
            <input type="text" placeholder="Enter Your Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            
            />
            <input type="number" placeholder="Enter Your Age"
            value={age}
            onChange={(e)=>setAge(e.target.value)}
            />
            <input type="text" placeholder="Enter Your City"
            value={city}
            onChange={(e)=>setCity(e.target.value)}
            />
            <input type="text" placeholder="Enter Your Education"
            value={edu}
            onChange={(e)=>setEdu(e.target.value)}
            />
            <input type="text" placeholder="Enter Your Occupation"
            value={ocu}
            onChange={(e)=>setOcu(e.target.value)}
            
            />
            <input type="number" placeholder="Enter Your Salary"
            value={sal}
            onChange={(e)=>setSal(e.target.value)}
            />
            <input type="text" placeholder="Enter Your Gender"
            value={gender}
            onChange={(e)=>setGender(e.target.value)}
            />
            <input type="number" placeholder="Enter Your Id"
            value={studId}
            onChange={(e)=>setStudId(e.target.value)}
            />
            </div>
            <div className="add-btn-div">
            <button className="add" onClick={addData}>Create</button>
        </div>
        </div>
        </Base>
    )
}
export default AddStudents;