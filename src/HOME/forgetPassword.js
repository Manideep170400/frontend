import React from "react";
import travel from "../travel.json"

function ForgetPassword() {
    const travelData = travel
    return (
        <div className="loginHeader__wrapper">
           <input type={travelData.forgetPassword.forgetPassword} placeholder="Email"  style={{marginTop :"200px"}}/>
        </div>
    )
}

export default ForgetPassword