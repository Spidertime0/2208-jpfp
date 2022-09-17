import React from "react";
import {Routes, Route, Link} from "react-router-dom"
import CampusList from "./components/CampusList";
import StudentList from "./components/StudentList";
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
            </div>
    ) 
}

export default App;