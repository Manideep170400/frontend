import express from "express";
import mongooseDB from "./BACKEND/mongoose/mongoose.mjs";
import cors from "cors";

const port = 5000;

const app = express();
app.use(cors());
app.use(express.json());
mongooseDB(app);
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
