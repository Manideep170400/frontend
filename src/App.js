import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./HOME/loginPage";
import UserAccount from "./Main/userAccount";
import CreateAccount from "./HOME/createAccount";
import ForgetPassword from "./HOME/forgetPassword";
import AllUsers from "./users/all-users";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<UserAccount />} />
          <Route path="/createAccount" element={<CreateAccount />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="/auth/loginPage" element={<LoginPage />} />
          <Route path="/all-users" element={<AllUsers />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
