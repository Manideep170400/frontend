import React from "react";
import './App.css'
import LoginPage from './HOME/loginPage';
import CreateAccount from "./HOME/createAccount";
import ForgetPassword from "./HOME/forgetPassword";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Home() {
    return(
        <div className="App">
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
                <Route path="/createAccount" element={<CreateAccount/>}/>
                <Route path="/forget Password" element={<ForgetPassword/>}/>
            </Routes>
        </Router>
        </div>
       
    )
    
}
export default Home