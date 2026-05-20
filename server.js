require("dotenv").config();
const express = require("express")
const app = express();
app.use(express.json())
//Converts the incoming JSON data into the JS Objet


const connectDB = require("./backend/db.js")
connectDB();

// importing the Routing 

const userRoutes = require("./routes/routing.js");
const { connection } = require("mongoose");
// const connectDB = require("./backend/db.js");

// using the routing
app.use("/users",userRoutes);

app.listen(3000,()=>{
    console.log("Server is running at the port 3000");
    
})