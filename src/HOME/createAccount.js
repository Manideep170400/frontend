import React from "react";
import travel from "../travel.json";

function CreateAccount() {
  const travelData = travel;

  return (
    <div className="App">
      <div className="loginHeader__wrapper">
        <input
          type="email"
          placeholder="Email"
          defaultValue={travelData.createAccount.email}
        />
        <input
          type="password"
          placeholder="Password"
          defaultValue={travelData.createAccount.password}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          defaultValue={travelData.createAccount.createPassword}
        />
        <button>Submit</button>
      </div>
    </div>
  );
}

export default CreateAccount;
