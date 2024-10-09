import SchemaModel from "../mongoose/schema.mjs";

const api__app = SchemaModel();

const api = (app) => {
  app.get("/", async (req, res) => {
    const response = await api__app.find(req.body)
      console.log(response)
      res.send(response)
  });
  app.post("/auth/loginPage", async (req, res) => {
    try {
      const response = await api__app.create(req.body)
    console.log(response)
    res.send(response)
    } catch (error) {
      console.error("Error in POST /createAccount:", error);
      res.status(500).send("Error creating account");
    }
    
  });
  app.post("/createAccount", async (req, res) => {
    try {
      const response = await api__app.create(req.body)
    console.log(response)
   res.send(response)
    } catch (error) {
      console.error("Error in POST /createAccount:", error);
      res.status(500).send("Error creating account");
    }
    
  });
 app.post("",async(req,res)=> {

 })
};

export default api;
