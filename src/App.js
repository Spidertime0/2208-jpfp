import React from "react";
import {Routes, Route, Link} from "react-router-dom"
import Campus from "./components/Campus";
import {useSelector} from 'react-redux';
import CampusList from "./components/CampusList";

function App() {
    return(
        <div className="App">
            <h1>Send help</h1>
            <div id='navbar'>
                <Link to={'campuses'}>Campuses </Link>
                <Link to={'students'}>Students </Link>
            </div>

            <div id='main-section'>Test Your App
                <Routes>
                    {/* <Route index element={<CampusList/>}/> */}
                    {/* <Route path={"students"} element={<StudentList/>}/> */}
                </Routes>
            </div>
        </div>
       

    // <div id='container'>
    //     <div id='navbar'>
    //         <Link to={'campus'}>Campus</Link>
    //     </div>

    //     <div id='main-section'>Test Your App
    //         { <Routes>
    //             <Route index element={<Campus/>}/>
    //             <Route path={"campus"} element={<Campus/>}/>
    //         </Routes> }
    //     </div>
    // </div>
    ) 
}

export default App;