import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import travelHistory from "../travelData";
import "../styles/all-users.css";

function UserAccount() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  let [show, setShow] = useState(false);

  const navigateToAllUsers = () => {
    navigate("/all-users");
  };

  const authLoginPage = () => {
    navigate("/login");
  };

  const update = () => {
    navigate("/update");
  };

  const travelPlace = travelHistory(navigate);

  const pathObject = {
    login: () => travelPlace.login(),
    allusers: navigateToAllUsers,
    update: update,
    authLogin: authLoginPage,
  };

  const showAndHide = () => {
    setShow(!show);
  };

  let usersContent;
  if (!users || users.length === 0) {
    usersContent = <p>No users found</p>;
  } else {
    usersContent = users.map((user, index) => (
      <div key={index} style={{ display: "flex" }}>
        <img
          src={`http://localhost:5000/${user.images[0]}`}
          alt={user.title}
          style={{ width: "50px", height: "100px" }}
        />
        <div>
          <span className="material-symbols-outlined" onClick={showAndHide}>
            arrow_drop_down
          </span>
          {show && (
            <div>
              <p>{user.title}</p>
              <p>{user.description}</p>
            </div>
          )}
        </div>
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
      <div className="userContent">{usersContent}</div>
    </div>
  );
}

export default UserAccount;
