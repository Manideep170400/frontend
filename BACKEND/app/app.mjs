import SchemaModel from "../mongoose/schema.mjs";
import multer from "multer";

const api__app = SchemaModel();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });

const api = (app) => {
  app.get("/allUsers", async (req, res) => {
    try {
      const response = await api__app.userAccountSchema.find({});
      res.send({ response });
    } catch (error) {
      res.send(error);
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
  app.post("/all-users", upload.array("image", 40), async (req, res) => {
    try {
      console.log("reqFile", req.files);

      const images = req.files.map((file) => file.path);
      const user = {
        ...req.body,
        images,
      };

      const response = await api__app.userAccountSchema.create(user);
      console.error("error");
      console.log(user);
      res.send({ response });
      console.log("response", response);
    } catch (error) {
      res.send(error);
      console.error(JSON.stringify(error));
    }
  });
  // delete user data
  app.delete("/all-users/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const response = await api__app.userAccountSchema.findByIdAndDelete(id);
      res.send({ message: "User deleted successfully", data: response });
    } catch (error) {
      res.send(error);
      console.error(JSON.stringify(error));
    }
  });
  // update user data
  app.put("/all-users/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const updateData = req.body;
      const response = await api__app.userAccountSchema.findByIdAndUpdate(
        id,
        updateData,
        { new: true }
      );
      res.send(response);
    } catch (error) {
      res.send(error);
      console.error(JSON.stringify(error));
    }
  });
};

export default api;
