import React from "react";
import travel from "../travel.json"
function CreateAccount() {
  const travelData = travel
    return (
        <div className="loginHeader__wrapper App">
          <input type={travelData.createAccount.email} placeholder="Email" style={{marginTop :"200px"}}/>
          <input type={travelData.createAccount.password} placeholder="password"/>
          <input type={travelData.createAccount.createPassword} placeholder="confirm Password" />
          <button>Submit</button>
        </div>
    )
}
export default CreateAccount;