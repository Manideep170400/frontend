import mongoose from "mongoose";
import api from "../app/app";
const mongo_URL =
  "mongodb+srv://manideepreddy170400:Manideep100@cluster0.tvgnemc.mongodb.net/";

export const mongooseDB = (app) => {
  mongoose.connect(mongo_URL);
  api(app)
    .then((result) => {
      console.log("mongoDB is connected");
    })
    .catch((err) => {
      console.error("error", err);
      console.log("mongoDB is not conected");
    });
};
