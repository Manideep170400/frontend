import React from "react";
import { useNavigate } from "react-router-dom";
import '../App.css'
import travel from "../travel.json"
function LoginPage() {
        const navigate = useNavigate()
        const travelData = travel
        const handleHomePage  = {
            createAccount : "/createAccount",
            forgetPassword :"/forget Password",
            allUsers :"/auth/loginPage/all-users"
        }
        const handlePageToggle = (path) => {
            navigate(path)
        }
    return (
        <div className="App">
             <p>Login Required</p>
            <div className="loginHeader__wrapper">
                <input type={travelData.login.email} placeholder="userName" />
                <input type={travelData.login.password} placeholder="password"/>
            </div>
            <div className="loginHeader__wrapper">
                <button onClick={()=> {
                    handlePageToggle(handleHomePage.allUsers)
                }}>login</button>
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