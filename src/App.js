import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { data } from './datas/data.js';
import Comp from './components/comp';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './dashboard/dashboard';
import AddStudents from './components/addstudents';
import EditStudent from './components/editStudents'; 


function App() {
  let [student, setStudents] = useState(data);
  // console.log("https://dummyimage.com/450x300/dee2e6/6c757d.jpg");
  return (
    <div className="App">
      {/* <img src='./images/6c757d.jpg'/> */}
      <Routes>
        <Route exact path="/" element={<Dashboard/>}/>

        <Route path='/students-data' element={<Comp
        student = {student}
        setStudents = {setStudents}/> 
        }/>
        <Route path='/add-student' element={<AddStudents
        students={student}
        setStudents={setStudents}
        />  
      }/>
      <Route path='edit-data/:id' element={<EditStudent
      student={student}
      setStudents={setStudents}
      />}/>
      </Routes>
      
      {/* <Comp
      student = {student}
      setStudents = {setStudents}/> */}
    
    </div>
  );
}

export default App;
