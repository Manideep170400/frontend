import axios from "axios";
import travel from "./travel.json";

const api_url = "http://localhost:5000";
const travelData = travel;

const travelHistory = (navigate) => {
  // createAccount
  const createAccount = async () => {
    try {
      let payload = {
        email: travelData.createAccount.email,
        password: travelData.createAccount.password,
        createPassword: travelData.createAccount.createPassword,
      };
      const response = await axios.post(`${api_url}/createAccount`, payload);
      navigate("/create-account");
      console.log(response.config.data);
    } catch (error) {
      console.error("error", error);
      console.log("enter a wrong  create data");
    }
  };
  // loginData
  const login = async () => {
    try {
      let payload = {
        email: travelData.login?.email,
        password: travelData.login?.password,
      };
      if (!travelData.login?.email || !travelData.login?.password) {
        console.log("Please enter both email and password");
        return "Please enter both email and password";
      }
      const response = await axios.post(`${api_url}/loginPage`, payload);
      navigate("/all-users");
      console.log(response.config.data);
    } catch (error) {
      console.error("Login error:", error);
      console.log("Incorrect login data, please check your credentials");
    }
  };
  // create Users Data
  // const allUsers = async () => {
  //   try {
  //     const payload = {
  //       title: travel.userAccount.title,
  //       image: travel.userAccount.image,
  //       description: travel.userAccount.description,
  //     };
  //     const response = await axios.post(`${api_url}/all-users`, payload);
  //     console.log("User added:", response.data);
  //     if (navigate) navigate("/all-users");
  //   } catch (error) {
  //     console.error("Error adding user:", error);
  //   }
  // };
  // get Users
  const usersGet = async (setUsers) => {
    try {
      const response = await axios.get(`${api_url}/allUsers`);
      setUsers(response.data.response);
    } catch (error) {
      console.error("error", error);
    }
  };

  return {
    createAccount,
    login,
    // allUsers,
    usersGet,
  };
};

export default travelHistory;
