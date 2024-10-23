import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import travelHistory from "../travelData";

function UserAccount() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const navigateToAllUsers = () => {
    navigate("/all-users");
  };

  const authLoginPage = () => {
    navigate("/login");
  };

  const update = () => {
    navigate("/update");
  };

  let usersContent;
  const travelPlace = travelHistory(navigate);

  const pathObject = {
    login: () => travelPlace.login(),
    allusers: navigateToAllUsers,
    update: update,
    authLogin: authLoginPage,
  };

  if (!users || users.length === 0) {
    usersContent = <p>No users found</p>;
  } else {
    usersContent = users.map((user, index) => (
      <div key={index}>
        <p>{user.title}</p>
        <img src={user.image} alt={user.title} />
        <p>{user.description}</p>
      </div>
    ));
  }

  useEffect(() => {
    travelPlace.usersGet(setUsers);
  }, [travelPlace]);

  return (
    <div>
      <div className="MainPage__wrapper">
        <h4>WishList</h4>
        <button onClick={pathObject.allusers}>ALL USERS</button>
        <button onClick={pathObject.authLogin}>AUTHENTICATION</button>
        <button onClick={pathObject.update}>Update</button>
      </div>

      <div>
        <div>{usersContent}</div>
      </div>
    </div>
  );
}

export default UserAccount;
