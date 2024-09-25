import React from "react";
import '../App.css'

function LoginPage() {
    return (
        <div>
            <div className="loginHeader__wrapper">
                <input type="" placeholder="userName"/>
                <input type="" placeholder="password"/>
            </div>
            <div className="loginHeader__wrapper">
                <button>login</button>
                <button>Switch to setUp</button>
                <button>Forget  Password</button>
            </div> 
        </div>
    )
}

export default LoginPage;