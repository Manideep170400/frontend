import { useLocation, useNavigate } from "react-router-dom";
import travelHistory from "../travelData";

const UpdateData = () => {
  const location = useLocation();
  const { user } = location.state || {};
  const navigate = useNavigate();
  const travelPlace = travelHistory(navigate);
  console.log("userTitle", user);
  let title;
  let description;

  const handleSave = () => {
    const updateData = { title, description };
    travelPlace.updateUser(user._id, updateData);
  };
  return (
    <div>
      <input type="text" placeholder="title" />
      <input type="text" placeholder="description" />
      <button onClick={handleSave}>save</button>
    </div>
  );
};

export default UpdateData;
