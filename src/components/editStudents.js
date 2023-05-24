import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Base from "../base/base";

function EditStudent({student, setStudents}){
    let navigate= useNavigate("");
    let {id} = useParams();
    let [name, setName] = useState("");
    let [age, setAge] = useState("");
    let [gender, setGender] = useState("");
    let [city, setCity] = useState("");
    let [edu, setEdu] = useState("");
    let [ocu, setOcu] = useState("");
    let [studId, setStudId] = useState("");
    let [sal, setSal] = useState("");
    

    useEffect(()=>{
        const editedData = student.find((val, ind)=>val.id==id);
        console.log(editedData);
        if(editedData){
            setName(editedData.name);
            setAge(editedData.age);
            setGender(editedData.gender);
            setCity(editedData.city);
            setEdu(editedData.education);
            setOcu(editedData.occupation)
            setSal(editedData.sal);
            setStudId(editedData.id);

        //     const studData = students.find((val, ind)=>val.id===id);
        // if(studData){
        //     setIdx(studData.id)
        //     setName(studData.name)
        //     setGender(studData.gender)
        //     setBatch(studData.batch)
        // }
            
        }
    }, [id, student]);

    function updateData(){
        let ind = student.findIndex((val)=>val.id==id);
        let newObj = {
            name,
            age,
            education:edu,
            city,
            id:studId,
            gender,
            occupation:ocu,
            sal
        }
        student[ind] = newObj;
        setStudents([...student]);
        navigate("/students-data")
    }

   

    
    return (
        <Base
        name={"Edit"}
        para2={"Edit the field if you want"}>
        <div className="add-stu-div">
            
            
            
             <h3>Please update all below details</h3>
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
            <div className="update-btn">
                <button onClick={updateData}>Update</button>
            </div>
            
        </div>
        </Base>
    )
}
export default EditStudent;