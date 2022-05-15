import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { RootState, AppDispatch } from "./app/store";
import ClassRecord from "./components/ClassRecord";
//import {useNavigate} from 'react-router-dom';
import { selectAllClasses, selectClassStatus, selectClassError} from './features/classSlice';
import  fetchClassRecords  from "./features/classSlice";


export default function App (){
/*
 const navigate = useNavigate();
 const handleLogin = () =>{
    navigate('/homePage')
 }
*/
  let records = useSelector(selectAllClasses)
  let classStatus = useSelector(selectClassStatus)
  let classError = useSelector(selectClassError)
  let dispatch = useDispatch<AppDispatch>();
const handleLogin =()=>{
  /*if(true){
    dispatch(fetchClassRecords)
  }*/
    dispatch(fetchClassRecords)
});

let content;
if(classStatus === "loading"){
  content = <p>loading classes ...</p>
}else if(classStatus === "succeeded"){
  content = records.map((record: Object , i: number)=>(<ClassRecord key={"record_"+i} record={record} />))
}else if (classStatus === "failed"){
    content = <p>{classError}</p>
}

  return (
    <div className="App">
      <div className="">
        <button>Logout</button>
      </div>
      <section className="container">
        <h2>Airtable Project</h2>
        <label> Student Name:
          <input placeholder="name"/>
        </label> 
        <button onClick={handleLogin}>Login</button>
          {content}
      </section>
    </div>
  )
};


