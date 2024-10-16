import axios from "axios";
import { response } from "express";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function UserAccount() {
  const navigate = useNavigate();
  const api_url = "http://localhost:5000";

  const pathObject = {
    authLoginPage: "/login",
    allUsers: "/all-users",
  };

  const handleTogglePage = (path) => {
    navigate(path);
  };

  useEffect(() => {
    axios
      .get(`${api_url}/allUsers`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("error", error);
        console.log("error occured", error);
      });
  }, []);
  const users = response.data;
  return (
    <div>
      <div className="MainPage__wrapper">
        <h4>WishList</h4>
        <button onClick={() => handleTogglePage(pathObject.allUsers)}>
          ALL USERS
        </button>
        <button onClick={() => handleTogglePage(pathObject.authLoginPage)}>
          AUTHENTICATION
        </button>
        <button>Update</button>
      </div>
      <div>
        {users.map((user, index) => (
          <div key={index}>
            <p>{user.title}</p>
            <p>{user.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserAccount;
