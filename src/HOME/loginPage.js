import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import travel from "../travel.json";
import travelHistory from "../travelData";

function LoginPage() {
  const navigate = useNavigate();
  const travelPlace = travelHistory(navigate);
  const travelData = travel;

  const handleToggle = {
    login: () => travelPlace.login(),
    account: () => travelPlace.createAccount()
  };

  return (
    <div className="App">
      <p>Login Required</p>
      <div className="loginHeader__wrapper">
        <input
          type="text"
          placeholder="userName"
          defaultValue={travelData.login.email}
        />
        <input
          type="password"
          placeholder="password"
          defaultValue={travelData.login.password}
        />
      </div>
      <div className="loginHeader__wrapper">
        <button onClick={handleToggle.login}>Login</button>
        <button onClick={handleToggle.account}>Switch to SetUp</button>
        <button
          onClick={() => {

          }}
        >
          Forget Password
        </button>
      </div>
    </div>
  );
}

export default LoginPage;