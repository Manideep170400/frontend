import axios from "axios";
import travel from "./travel.json";

const api_url = "http://localhost:5000";
const travelData = travel;

const travelHistory = (navigate) => {
  const createAccount = async () => {
    try {
      let payload = {
        email: travelData.createAccount.email,
        password: travelData.createAccount.password,
        createPassword: travelData.createAccount.createPassword,
      };
      const response = await axios.post(`${api_url}/createAccount`, payload);
      navigate("/create-account");
      console.log(response.data);
    } catch (error) {
      console.error("error", error);
      console.log("enter a wrong data");
    }
  };

  const login = async () => {
    try {
      let payload = {
        email: travelData.login.email,
        password: travelData.login.password,
      };
      const response = await axios.post(`${api_url}/auth/loginPage`, payload);
      navigate("/all-users");
      console.log(response.data);
    } catch (error) {
      console.error("error", error);
      console.log("enter a wrong data");
    }
  };

  return {
    createAccount,
    login,
  };
};

export default travelHistory;
