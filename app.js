
const express = require("express");
const mongoose=require("mongoose")
require("dotenv").config()
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
mongoose.connect("mongodb://0.0.0.0:27017/react-login-tut")
.then(()=>{
    console.log("Home mongodb connected");
})
.catch((err)=>{
    console.log(err);
})


const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },

    mobile:{
      type:String,
      required:true
  },
  username:{
      type:String,
      required:true
  }
})

const collection = mongoose.model("collection",newSchema)


const newSchema1=new mongoose.Schema({
  email:{
      type:String,
      required:true
  },
  name:{
      type:String,
      required:true
  },

  mobile:{
    type:String,
    required:true
},
query:{
    type:String,
    required:true
}
})

const collection1 = mongoose.model("collection1",newSchema1)











app.get("/", cors(), (req, res) => {});

app.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const check = await collection.findOne({
      email: email,
      password: password,
    });

    if (check) {
      res.json("exist");
    } else {
      res.json("notexist");
    }
  } catch (e) {
    res.json("fail");
  }
});






app.post("/signup", async (req, res) => {
  const { email, password,mobile,username } = req.body;

  const data = {
    email: email,
    password: password,
    mobile:mobile,
    username:username
  };

  try {
    const check = await collection.findOne({ email: email });

    if (check) {
      res.json("exist");
    } else {
      res.json("notexist");
      await collection.insertMany([data]);
    }
  } catch (e) {
    res.json("fail");
  }
});






app.post("/feedback", async (req, res) => {
  const { email, name, mobile, query } = req.body;

  const data = {
    email: email,
    name: name,
    mobile: mobile,
    query: query
  };

  try {
    // await collection1.create(data);
    await collection1.insertMany([data]);
    res.json("success");
  } catch (error) {
    console.error(error);
    res.json("fail");
  }
});

app.get("/queries", async (req, res) => {
  try {
    const queries = await collection1.find({});
    res.json(queries);
  } catch (error) {
    console.error("Error retrieving queries:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// DELETE /queries/:id
app.delete("/queries/:id", async (req, res) => {
  const queryId = req.params.id;

  try {
    await collection1.findByIdAndDelete(queryId);
    res.json({ message: "Query deleted successfully" });
  } catch (error) {
    console.error("Error deleting query:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// PUT /queries/:id
app.put("/queries/:id", async (req, res) => {
  const queryId = req.params.id;
  const { email, name, mobile, query } = req.body;

  try {
    await collection1.findByIdAndUpdate(queryId, {
      email: email,
      name: name,
      mobile: mobile,
      query: query,
    });
    res.json({ message: "Query updated successfully" });
  } catch (error) {
    console.error("Error updating query:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});




app.listen(8000, () => {
  console.log("port connected");
});
