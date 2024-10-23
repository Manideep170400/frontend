import React from "react";
import travel from "../travel.json";
import "../App.css";
import "../styles/all-users.css";
import travelHistory from "../travelData";
import { useNavigate } from "react-router-dom";

function AllUsers() {
  const travelData = travel;
  const maps = "https://www.google.com/maps";
  const handleViewOnMap = (e) => {
    e.preventDefault(maps);

    window.open(maps, "_self");
  };
  const travelPlace = travelHistory();
  const navigate = useNavigate();
  const addUser = {
    users: () => travelPlace.allUsers(navigate("/")),
  };

  return (
    <div className="allUsers__border">
      <div className="title">
        <p>Title</p>
      </div>
      <div>
        <label>
          <input
            type="text"
            placeholder="title"
            defaultValue={travelData.userAccount.title}
            onChange={(e) => {
              travelData.userAccount.title = e.target.value;
            }}
          />
        </label>
        <label>
          <input
            type="file"
            defaultValue={travelData.userAccount.image}
            onChange={(e) => {
              travelData.userAccount.image = e.target.value;
            }}
            accept="Image/*"
          />
        </label>
        <div className="ViewMap">
          <span onClick={handleViewOnMap}>View On Map</span>
          <div className="ViewMap">
            <span class="material-symbols-outlined">edit</span>
            <span class="material-symbols-outlined">delete</span>
          </div>
        </div>
      </div>
      <div className="input__allUsers">
        <label>Description</label>
        <input
          type="text"
          placeholder="decsription"
          defaultValue={travelData.userAccount.description}
          onChange={(e) => {
            travelData.userAccount.description = e.target.value;
          }}
        />
      </div>
      <button onClick={addUser.users}>AddUser</button>
    </div>
  );
}

export default AllUsers;
