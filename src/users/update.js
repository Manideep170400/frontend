import { useLocation, useNavigate } from "react-router-dom";
import travelHistory from "../travelData";
import { useState } from "react";

const UpdateData = () => {
  const location = useLocation();
  const { user } = location.state || {};
  const navigate = useNavigate();
  const travelPlace = travelHistory(navigate);

  let [title, setTitle] = useState(user.title);
  let [description, setDescription] = useState(user.description);

  const handleSave = async () => {
    const updateData = { title, description };
    await travelPlace.updateUser(user._id, updateData);
    navigate("/");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default UpdateData;
