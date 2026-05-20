const express = require("express")
const routeer = express.Router();

const {
    getUser, getUserById, deleteUser, createUser, updateUser
} = require("../controllers/controllers.js")
// Get All User 
routeer.get("/", getUser)

//getUser By ID
routeer.get("/:id",getUserById);

//create USers
routeer.post("/",createUser);

//update user
routeer.put("/:id",updateUser);

//delete user
routeer.delete("/:id",deleteUser);
module.exports = routeer