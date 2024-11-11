import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import travelHistory from "../travelData";
import "../styles/all-users.css";

function UserAccount() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);

  const navigateToAllUsers = () => navigate("/all-users");
  const authLoginPage = () => navigate("/login");
  const update = (user) => navigate("/update", { state: { user } });

  const travelPlace = travelHistory(navigate);

  const pathObject = {
    login: travelPlace.login,
    allusers: navigateToAllUsers,
    update: update,
    authLogin: authLoginPage,
    deleteUser: async (id) => {
      const success = await travelPlace.deleteUser(id);
      if (success) {
        setUsers(users._id);
      } else {
        console.error("Failed to delete user");
      }
    },
  };

  const showAndHide = () => setShow(!show);

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
      <div className="userContent">
        {users.length === 0 ? (
          <p>No users found</p>
        ) : (
          users.map((user) => (
            <div key={user._id} className="user-content">
              <img
                src={`http://localhost:5000/${user.images[0]}`}
                alt={user.title}
                style={{ width: "40px" }}
              />
              <div>
                <span
                  className="material-symbols-outlined"
                  onClick={showAndHide}
                >
                  arrow_drop_down
                </span>
                <span
                  className="material-symbols-outlined"
                  onClick={() => update(user)}
                >
                  edit
                </span>
                {show && (
                  <div>
                    <p>{user.title}</p>
                    <p>{user.description}</p>
                  </div>
                )}
              </div>
              <span
                className="material-symbols-outlined"
                onClick={() => pathObject.deleteUser(user._id)}
              >
                delete
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default UserAccount;
