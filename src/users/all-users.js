import React from "react";
import travel from "../travel.json";
import "../App.css";
import "../styles/all-users.css";

function AllUsers() {

  const travelData = travel;
  const maps = "https://www.google.com/maps";
  const handleViewOnMap = (e) => {
    e.preventDefault(maps);

    window.open(maps, "_self");
  };
  
  return (
    <div className="allUsers__border">
      <div className="title">
        <p>Title</p>
      </div>
      <div>
        <label>
          <input type="file" value={travelData.userAccount.image} accept="Image/*" />
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
        <input type={travelData.userAccount.description} placeholder="decsription"/>
      </div>
    </div>
  );
}

export default AllUsers;
