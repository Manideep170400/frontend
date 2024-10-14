import mongoose from "mongoose";
import api from "../app/app.mjs";

const mongo_URL = "mongodb://localhost:27017/testDB";

const mongooseDB = (app) => {
  mongoose
    .connect(mongo_URL)
    .then(() => {
      console.log("MongoDB is connected");
      api(app);
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB:", err);
    });
};

export default mongooseDB;
