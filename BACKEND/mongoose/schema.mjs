import mongoose, { Schema } from "mongoose";

const userAccount = new Schema({
  title: String,
  image: String,
  description: String,
});

const loginPage = new Schema({
  email: String,
  password: String,
});
const createAccount = new Schema({
  email: String,
  password: String,
  createPassword: String,
});

const SchemaModel = () => {
  const userAccountSchema = mongoose.model("userAccount", userAccount);
  const loginPageSchema = mongoose.model("loginPage", loginPage);
  const createAccountSchema = mongoose.model("createAccount", createAccount);

  return userAccountSchema, loginPageSchema, createAccountSchema;
};

export default SchemaModel;
