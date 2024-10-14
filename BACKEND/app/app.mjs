import SchemaModel from "../mongoose/schema.mjs";

const api__app = SchemaModel();

const api = (app) => {
  app.get("/allUsers", async (req, res) => {
    try {
      const response = await api__app.userAccountSchema.find(req.body);
      res.send(response);
    } catch (error) {
      console.error("Error in GET /:", error);
      res.status(500).json("Error retrieving user accounts");
    }
  });

  // api for login Page
  app.post("/loginPage", async (req, res) => {
    try {
      console.log(req.body);
      const response = await api__app.loginPageSchema.findOne({
        id: req.body.id,
      });
      if (response) {
        return res.send("User not found");
      }
      if (response.password !== req.body.password) {
        return res.send("Invalid password");
      }
      res.send(response);
    } catch (error) {
      console.error("Error in POST /auth/loginPage:", error);
      res.json("wrong login Page");
    }
  });

  // api for create Account
  app.post("/createAccount", async (req, res) => {
    try {
      console.log(req.body);
      const response = await api__app.createAccountSchema.create(req.body);
      if (response.password !== response.createPassword) {
        return res.json("data is not created");
      }
      res.send({ response });
    } catch (error) {
      console.error("Error in POST /createAccount:", error);
      res.json("Error creating account");
    }
  });

  // api for all Users
  app.post("/allUsers", async (req, res) => {
    try {
      const response = await api__app.userAccountSchema.create(req.body);
      res.send(response);
    } catch (error) {
      console.error("error is occured", error);
      res.json("errror all users is created");
    }
  });
};

export default api;
