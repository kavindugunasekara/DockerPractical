const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//Import user model
const User = require("./User");

const app = express();
app.use(express.json());
app.use(cors());

//connect to MongoDB
mongoose
   .connect(process.env.MONGODB_URI)
    .then(() => {
    console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log("Failed to connect to MongoDB", err);
    }
        );

    //API routes for create user
    app.post("/api/users", async (req, res) => {
      try{
        const user = new User(req.body);
        const result =await user.save();
        res
        .status(201)
        .json({message: "User created successfully", data: result});
      }catch(error){

        res.status(500).json({error: "Internal server error" + error });
      }
    });

    //APi routed for get all users
    app.get("/api/users",async (req,res)=> {
        try {
            const users = await User.find();
            res
               .status(200)
               .json({message: "user data fetched successfully ", data: users});
        }catch (error){
            res.status(500).json({error: "Internal server error" + error});
        }
    });

    //listen to port
    app.listen(5000,()=> {
        console.log("Server is running on port 5000");

    });