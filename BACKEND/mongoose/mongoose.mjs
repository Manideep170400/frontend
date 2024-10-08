import mongoose from "mongoose";
import api from "../app/app.mjs";

const mongo_URL = "mongodb://localhost:27017/testDB";

const mongooseDB = (app) => {
  mongoose
    .connect(mongo_URL)
    .then((result) => {
      console.log("mongoDB is connected");
      api(app);
    })
    .catch((err) => {
      console.error("error", err);
      console.log("mongoDB is not conected");
    });
};

export default mongooseDB;
