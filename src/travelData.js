import axios from "axios";
import travel from "./travel.json";

const api_url = "http://localhost:5000"; // Update with the actual API URL
const travelData = travel;

const travelHistory = (navigate) => {
  const createAccount = async () => {
    try {
      let payload = {
        email: travelData.createAccount.email,
        password: travelData.createAccount.password,
        createPassword: travelData.createAccount.createPassword,
      };
      const res = await axios.post(`${api_url}/createAccount`, payload);
      if (res.status === 201) {
        navigate("/create-account");
      }
    } catch (error) {
      console.error(
        "Create Account Error:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const login = async () => {
    try {
      let payload = {
        email: travelData.login.email,
        password: travelData.login.password,
      };
      const res = await axios.post(`${api_url}/auth/loginPage`, payload);
      if (res.status === 200) {
        navigate("/all-users");
      }
    } catch (error) {
      console.error(
        "Login Error:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return {
    createAccount,
    login,
  };
};

export default travelHistory;
