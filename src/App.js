import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./HOME/loginPage";
import UserAccount from "./Main/userAccount";
import CreateAccount from "./HOME/createAccount";
import ForgetPassword from "./HOME/forgetPassword";
import AllUsers from "./users/all-users";
import UpdateData from "./users/update";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<UserAccount />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/all-users" element={<AllUsers />} />
          <Route path="/update" element={<UpdateData />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
