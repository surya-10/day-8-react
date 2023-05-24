import Base from '../base/base';
import {data} from '../datas/data';
import React, { useState } from 'react';
import AddStudents from './addstudents';
import EditStudent from './editStudents';
import { useNavigate } from 'react-router-dom';


function Comp({student, setStudents}){
    let [stuId, setStuId] = useState("");
    let navigate = useNavigate();

    function editData(id){
        // console.log(id);
        navigate(`/edit-data/${id}`);

    }


    function deleting(id){
        let newArr = student.filter((stud)=>stud.id!==id);
        // console.log(newArr);
        setStudents(newArr);
    }
    return (
        <div className='comp-div'>
            
            <Base
            name="Hi, Welcome to Students page"
            para2="You can see all students data in this page">
                {/* <AddStudents
                students={student}
                setStudents={setStudents}
                /> */}
                {/* <EditStudent
                stuId = {stuId}
                student={student}
                setStudents={setStudents}
                /> */}
                <div className='all'>
                {student.map((val, ind)=>(
                    <div className='student' key={ind}>
                        <h3>{val.name}</h3>
                        <h4>Age: {val.age}</h4>
                        <h4>Qualification: {val.education}</h4>
                        <h4>City: {val.city}</h4>
                        <h4>occupation: {val.occupation}</h4>
                        <h4>Salary: {val.sal}</h4>
                        <h4>Gender: {val.gender}</h4>
                        <div className='btn-div'>
                            <button onClick={()=>editData(val.id)}>Edit</button>
                            <button onClick={()=>deleting(val.id)}>Delete</button>
                            </div>
                    </div>
                ))}
                </div>
            </Base>
        </div>
    )
}
export default Comp;