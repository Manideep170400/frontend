import { useLocation } from "react-router-dom";

const UpdateData = () => {
  const location = useLocation();
  const { user } = location.state || {};

  console.log("userTitle", user);
  return (
    <div>
      <input type="text" placeholder="title" />
      <input type="text" placeholder="description" />
      <button>save</button>
    </div>
  );
};

export default UpdateData;
