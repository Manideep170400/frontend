import SchemaModel from "../mongoose/schema.mjs";

const api__app = SchemaModel();

const api = (app) => {
  app.get("/", async (req, res) => {
    try {
      const response = await api__app.userAccountSchema.find(req.body);
      res.send(response);
    } catch (error) {
      console.error("Error in GET /:", error);
      res.status(500).send("Error retrieving user accounts");
    }
  });
  app.post("/auth/loginPage", async (req, res) => {
    try {
      const { email, password } = req.body;

      const userExists = await api__app.loginPageSchema.findOne({ email });

      if (!userExists) {
        return res.status(404).send("User not found");
      }
      if (userExists.password !== password) {
        return res.status(401).send("Invalid password");
      }

      res
        .status(200)
        .send({ message: "Logged in successfully", user: userExists });
    } catch (error) {
      console.error("Error in POST /auth/loginPage:", error);
      res.status(500).send("Error logging in");
    }
  });
  app.post("/createAccount", async (req, res) => {
    try {
      const { email, password, createPassword } = req.body;

      if (password !== createPassword) {
        return res.status(400).send("Passwords do not match");
      }

      const userExists = await api__app.createAccountSchema.findOne({ email });

      if (userExists) {
        return res.status(409).send("User with this email already exists");
      }

      const newUser = await api__app.createAccountSchema.create({
        email,
        password,
      });
      res
        .status(201)
        .send({ message: "Account created successfully", newUser });
    } catch (error) {
      console.error("Error in POST /createAccount:", error);
      res.status(500).send("Error creating account");
    }
  });
};

export default api;
