import React from "react";
import travel from "../travel.json";

function ForgetPassword() {
  const travelData = travel;

  return (
    <div className="App">
      <div className="loginHeader__wrapper">
        <input
          type="email"
          placeholder="Email"
          defaultValue={travelData.forgetPassword.forgetPassword}
          style={{ marginTop: "200px" }}
        />
      </div>
    </div>
  );
}

export default ForgetPassword;
