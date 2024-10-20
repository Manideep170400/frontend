import SchemaModel from "../mongoose/schema.mjs";

const api__app = SchemaModel();

const api = (app) => {
  app.get("/allUsers", async (req, res) => {
    try {
      // Use find() to retrieve all users
      const response = await api__app.userAccountSchema.find({});
      console.log(response);
      res.send({ response });
    } catch (error) {
      res.status(500).send(error);
      console.error(JSON.stringify(error));
    }
  });

  // api for login Page
  app.post("/loginPage", async (req, res) => {
    try {
      console.log(req.body);
      const loginData = await api__app.createAccountSchema.findOne({
        email: req.body.email,
      });

      console.log("response", loginData);
      if (!loginData) {
        res.send({
          error: "Invalid Email.",
        });
      } else if (req.body.password === loginData.password) {
        res.send({ _id: loginData._id, email: loginData.email });
      } else {
        res.send({
          error: "Incorrect Password.",
        });
      }
    } catch (error) {
      res.send(error);
      console.error(JSON.stringify(error));
    }
  });

  // api for create Account
  app.post("/createAccount", async (req, res) => {
    try {
      // console.log(req.body);
      const response = await api__app.createAccountSchema.create(req.body);
      if (response.password === response.createPassword) {
        return res.json("data is created");
      }
      res.send({ response });
    } catch (error) {
      res.send(error);
      console.error(JSON.stringify(error));
    }
  });

  // api for all Users
  app.post("/all-users", async (req, res) => {
    try {
      const response = await api__app.userAccountSchema.create(req.body);
      res.send(response);
      console.log(response);
    } catch (error) {
      res.send(error);
      console.error(JSON.stringify(error));
    }
  });
};

export default api;
