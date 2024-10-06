import SchemaModel from "../mongoose/schema.mjs";

const api__app = SchemaModel();

const api = (app) => {
  app.get("/", async (req, res) => {});
  app.post("/login", async (req, res) => {});
  app.post("/createAccont", async (req, res) => {});
  app.post("", async (req, res) => {});
};

export default api;
