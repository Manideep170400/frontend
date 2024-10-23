import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import travel from "../travel.json";
import axios from "axios";
import "../App.css";
import "../styles/all-users.css";

const api_url = "http://localhost:5000";

function AllUsers() {
  const travelData = travel;
  const navigate = useNavigate();
  const [images, setImages] = useState(null);

  const handleViewOnMap = (e) => {
    e.preventDefault();
    window.open("https://www.google.com/maps", "_self");
  };

  const handleImages = (e) => {
    const file = URL.createObjectURL(e.target.files[0]);
    setImages(file);
  };

  const addUser = async () => {
    try {
      const payload = {
        title: travel.userAccount.title,
        image: travel.userAccount.image,
        description: travel.userAccount.description,
      };
      const response = await axios.post(`${api_url}/all-users`, payload);
      console.log("User added:", response.data);
      navigate("/all-users");
      navigate("/");
    } catch (error) {
      console.error("Error adding user:", error);
    }
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
          <input type="file" onChange={handleImages} accept="Image/*" />
          {images && <img src={images} alt="preview" width="40px" />}
        </label>
        <div className="ViewMap">
          <span onClick={handleViewOnMap}>View On Map</span>
          <div className="ViewMap">
            <span className="material-symbols-outlined">edit</span>
            <span className="material-symbols-outlined">delete</span>
          </div>
        </div>
      </div>
      <div className="input__allUsers">
        <label>Description</label>
        <input
          type="text"
          placeholder="description"
          defaultValue={travelData.userAccount.description}
          onChange={(e) => {
            travelData.userAccount.description = e.target.value;
          }}
        />
      </div>
      <button onClick={addUser}>AddUser</button>
    </div>
  );
}

export default AllUsers;
