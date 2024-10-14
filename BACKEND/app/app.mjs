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
  app.post("/auth/loginPage", async (req, res) => {
    try {
      console.log(req.body);
      const userExists = await api__app.loginPageSchema.findOne({
        email: req.body.email,
      });
      if (!userExists) {
        return res.status(404).send("User not found");
      }
      if (userExists.password !== req.body.password) {
        return res.status(404).send("Invalid password");
      }
      res.status(200).json("valid email and password");
    } catch (error) {
      console.error("Error in POST /auth/loginPage:", error);
      res.status(500).json("wrong login Page");
    }
  });

  // api for create Account
  app.post("/createAccount", async (req, res) => {
    try {
      if (req.body.password !== req.body.createpassword) {
        return res.status(404).send("Passwords do not match");
      }
      const userExists = await api__app.createAccountSchema.findOne(
        req.body.email
      );
      return res.status(200).send({ userExists });
    } catch (error) {
      console.error("Error in POST /createAccount:", error);
      res.status(500).json("Error creating account");
    }
  });

  // api for all Users
  app.post("/allUsers", async (req, res) => {
    try {
      const response = await api__app.userAccountSchema.create(req.body);
      res.status(200).send(response);
    } catch (error) {
      console.error("error is occured", error);
      res.status(500).json("errror all users is created");
    }
  });
};

export default api;
