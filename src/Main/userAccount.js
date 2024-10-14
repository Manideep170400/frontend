import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function UserAccount() {
  const users = "";
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
        <button>NEW</button>
      </div>
      <div>
        {users.map((user) => {
          return (
            <div>
              <div>{user.title}</div>
              <div>{user.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UserAccount;
