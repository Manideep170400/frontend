import React, { useState } from "react";
import travel from "../travel.json";
import "../App.css";
import "../styles/all-users.css";
import travelHistory from "../travelData";
import { useNavigate } from "react-router-dom";

function AllUsers() {
  const travelData = travel;
  const [image, setImage] = useState("");
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
  const handleImage = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
  };
  return (
    <div className="allUsers__border">
      <div className="title">
        <p>Title</p>
      </div>
      <div>
        <label>
          <input type="file" onChange={handleImage} accept="image/*" />
          {image && <img src={image} alt="Uploaded Preview" className="img" />}
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
