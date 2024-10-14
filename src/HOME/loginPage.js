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
    createAccount: () => travelPlace.createAccount(),
  };
  console.log("email", travelData.login.email);
  return (
    <div className="App">
      <p>Login Required</p>
      <div className="loginHeader__wrapper">
        <input
          type="text"
          placeholder="Username"
          defaultValue={travelData.login.email}
          onChange={(e) => {
            travelData.login.email = e.target.value;
          }}
        />
        <input
          type="password"
          placeholder="Password"
          defaultValue={travelData.login.password}
          onChange={(e) => {
            travelData.login.password = e.target.value;
          }}
        />
      </div>
      <div className="loginHeader__wrapper">
        <button onClick={handleToggle.login}>Login</button>
        <button onClick={handleToggle.createAccount}>Create Account</button>
        <button onClick={() => {}}>Forget Password</button>
      </div>
    </div>
  );
}

export default LoginPage;
