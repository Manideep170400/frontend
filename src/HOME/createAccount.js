import React from "react";
import travel from "../travel.json";
import travelHistory from "../travelData";
import { useNavigate } from "react-router-dom";

function CreateAccount() {
  const travelData = travel;
  const navigate = useNavigate();
  const travelPlace = travelHistory(navigate);

  const handleSubmit = () => {
    travelPlace.createAccount("/all-users");
  };

  return (
    <div className="App">
      <div className="loginHeader__wrapper">
        <input
          type="email"
          placeholder="Email"
          defaultValue={travelData.createAccount.email}
          onChange={(e) => (travelData.createAccount.email = e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          defaultValue={travelData.createAccount.password}
          onChange={(e) => (travelData.createAccount.password = e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          defaultValue={travelData.createAccount.createPassword}
          onChange={(e) =>
            (travelData.createAccount.createPassword = e.target.value)
          }
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default CreateAccount;
