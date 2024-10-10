import axios from "axios";
import travel from "./travel.json";

const api_url = "http://localhost:5000";
const travelData = travel;

const travelHistory = (navigate) => {
  const createAccount = async () => {
    let payload = {
      email: travelData.createAccount.email,
      password: travelData.createAccount.password,
      createPassword: travelData.createAccount.createPassword,
    };
    const res = await axios.post(`${api_url}/createAccount`, payload);
    return res;
  };

  const login = async () => {
    let payload = {
      email: travelData.login.email,
      password: travelData.login.password,
    };
    const res = await axios.post(`${api_url}/auth/loginPage`, payload);
    if(travelData.login.email) {
        try {
            navigate("/all-users")
             res.status = '200'
        } catch (error) {
            console.log('error',error)
        }
    } else {
        res.status = "500"
        res.json("error")
    }
    return res;
  };

  return {
    createAccount,
    login,
  };
};

export default travelHistory;
