import mongoose, { Schema } from "mongoose";

const loginPageSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const createAccountSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const userAccountSchema = new Schema({
  title: String,
  image: String,
  description: String,
});

const SchemaModel = () => {
  const loginPage = mongoose.model("loginPage", loginPageSchema);
  const createAccount = mongoose.model("createAccount", createAccountSchema);
  const userAccount = mongoose.model("userAccount", userAccountSchema);

  return {
    loginPageSchema: loginPage,
    createAccountSchema: createAccount,
    userAccountSchema: userAccount,
  };
};

export default SchemaModel;
