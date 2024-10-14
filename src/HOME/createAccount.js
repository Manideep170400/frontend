import React from "react";
import travel from "../travel.json";
import travelHistory from "../travelData";
import { useNavigate } from "react-router-dom";

function CreateAccount() {
  const travelData = travel;
  const navigate = useNavigate();
  const travelPlace = travelHistory(navigate);

  const handleToggle = {
    createAccount: () => travelPlace.createAccount(),
  };

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
        <button onClick={handleToggle.createAccount}>Submit</button>
      </div>
    </div>
  );
}

export default CreateAccount;
