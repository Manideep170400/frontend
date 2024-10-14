import React from "react";
import { useNavigate } from "react-router-dom";

function UserAccount() {
  const navigate = useNavigate();

  const pathObject = {
    authLoginPage: "/login",
    allUsers: "/all-users",
  };

  const handleTogglePage = (path) => {
    navigate(path);
  };

  return (
    <div className="MainPage__wrapper">
      <h4>WishList</h4>
      <button onClick={() => handleTogglePage(pathObject.allUsers)}>
        ALL USERS
      </button>
      <button onClick={() => handleTogglePage(pathObject.authLoginPage)}>
        AUTHENTICATION
      </button>
      <button>NEW</button>
      <div>
        <p>Left</p>
      </div>
    </div>
  );
}

export default UserAccount;
