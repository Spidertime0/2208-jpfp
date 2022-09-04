import React from "react";
import {Routes, Route, Link} from "react-router-dom"
import Campus from "./components/Campus";

function App() {

    return(

    <div id='container'>
        <div id='navbar'>
            <Link to={'campus'}>Campus</Link>
        </div>

        <div id='main-section'>Test Your App
            {/* <Routes>
                <Route index element={<Campus/>}/>
                <Route path={"campus"} element={<Campus/>}/>
            </Routes> */}
        </div>
    </div>
    ) 
}

export default App;