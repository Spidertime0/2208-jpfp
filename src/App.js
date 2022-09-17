import React from "react";
import {Routes, Route, Link, Switch} from "react-router-dom"
import Campus from "./components/Campus";
import {useSelector} from 'react-redux';
import CampusList from "./components/CampusList";
import { createStore } from "@reduxjs/toolkit";
import StudentList from "./components/StudentList";
import { BrowserRouter } from "react-router-dom";
import SingleCampus from "./components/SingleCampus";
import SingleStudent from "./components/SingleStudent";

const App = () => {

    return(
            <div className="App">
                <h3>Navigation</h3>
                <div id='navbar'>
                    <Link to={'campuses'}>Campuses </Link>
                    <Link to={'students'}>Students </Link>
                </div>
                <div id ='routes'>
                <Routes>
                    <Route path="/" element={<CampusList/>}/>
                    <Route path="/campuses" element={<CampusList/>}/>
                    <Route path="/students" element={<StudentList/>}/>
                    <Route path="/campuses/:id" element={<SingleCampus/>}/>
                    <Route path="/students/:id" element={<SingleStudent/>}/>
                        
                </Routes>
                </div>
                <div id='main-section'>
                {/* <CampusList/>
                <StudentList/> */}
                </div>
            </div>
    ) 
}

export default App;