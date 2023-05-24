import React from "react";
import Base from "../base/base";
import Comp from "../components/comp";


function Dashboard({student, setStudents}){
    return (
        <div className="dash-div">
           <Base
           name={"Hello, Good Day"}
           para2={"Welcome to students data page"}/>
        </div>
    )
}
export default Dashboard;