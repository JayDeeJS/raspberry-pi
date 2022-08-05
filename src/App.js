import React from "react";
import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from "./Home/Home";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/checkout"/>
                <Route path="/login"/>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </div>
    );
}

export default App;
