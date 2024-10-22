import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import travelHistory from "../travelData";

function UserAccount() {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const authLoginPage = async () => {
    try {
      navigate("/login");
    } catch (error) {
      console.error("error", error);
    }
  };
  const update = async () => {
    try {
      navigate("/update");
    } catch (error) {
      console.error("error", error);
    }
  };
  let usersContent;
  const travelPlace = travelHistory(navigate);

  const pathObject = {
    login: () => travelPlace.login(),
    allusers: () => travelPlace.allUsers(),
    update: update,
    authLogin: authLoginPage,
  };

  if (!users) {
    usersContent = <p>No users found</p>;
    console.log("users", usersContent);
  } else {
    usersContent = [];
    for (let i = 0; i < users.length; i++) {
      usersContent.push(
        <div key={i}>
          <p>{users[i].title}</p>
          <img src={users[i].image} alt={users[i].title} />
          <p>{users[i].description}</p>
        </div>
      );
    }
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
        {users ? (
          users.map((user, index) => (
            <div key={index}>
              <h5>{user.title}</h5>
              <img src={user.image} alt="users" />
              <p>{user.description}</p>
            </div>
          ))
        ) : (
          <p>No users found</p>
        )}
      </div>
      <div>
        <p>{usersContent}</p>
      </div>
    </div>
  );
}

export default UserAccount;
