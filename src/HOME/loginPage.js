import React from "react";
import { useNavigate } from "react-router-dom";
import '../App.css'

function LoginPage() {
        const navigate = useNavigate()

        const handleHomePage  = {
            createAccount : "/createAccount",
            forgetPassword :"/forget Password"
        }
        const handlePageToggle = (path) => {
            navigate(path)
        }
    return (
        <div className="App">
             <p>Login Required</p>
            <div className="loginHeader__wrapper">
                <input type="" placeholder="userName"/>
                <input type="" placeholder="password"/>
            </div>
            <div className="loginHeader__wrapper">
                <button>login</button>
                <button onClick={()=> {
                    handlePageToggle(handleHomePage.createAccount)
                }}>Switch to setUp</button>
                <button onClick={()=> {
                    handlePageToggle(handleHomePage.forgetPassword)
                }}>Forget  Password</button>
            </div> 
        </div>
    )
}

export default LoginPage;