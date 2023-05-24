import React, { Children } from "react";
import { useNavigate } from "react-router-dom";

function Base({name, para2, children}){
    let navigate = useNavigate();
    return (
        <div className="base-div">
            <header>
                <div className="base">
                    <h4>My Data</h4>
                </div>
                <nav>
                    <button onClick={()=>navigate("/")}>Dashboard</button>
                    <button onClick={()=>navigate('/students-data')}>Students</button>
                    <button onClick={()=>navigate('/add-student')}>Add Student</button>
                    
                </nav>
            </header>
            <div className="main">
                <h3>{name}</h3>
                <h4>{para2}</h4>
                <div>
                {children}
                </div>
            </div>

        </div>
    )
}
export default Base;