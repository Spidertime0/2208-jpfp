import React from "react";
import {Routes, Route, Link, Switch} from "react-router-dom"
import Campus from "./components/Campus";
import {useSelector} from 'react-redux';
import CampusList from "./components/CampusList";
import { createStore } from "@reduxjs/toolkit";
import StudentList from "./components/StudentList";
// import { BrowserRouter as Router} from "react-router-dom";

const App = () => {

// const campuses = useSelector((state) => state.campuses)
// const dispatch = useDispatch();

    return(
        <div className="App">
            <h3>Navigation</h3>
            <div id='navbar'>
                <Link to={'campuses'}>Campuses </Link>
                <Link to={'students'}>Students </Link>
            </div>

            <div id='main-section'>
            <Routes>
                    <Route path="/campuses" element={<CampusList/>}/>
                    <Route path="/students" element={<StudentList/>}/>
            </Routes>
            </div>
        </div>
    ) 
}

export default App;