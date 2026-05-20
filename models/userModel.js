const mongoose = require("mongoose");
// create Schema 
const userSchema = new mongoose.Schema({
    name:{type:String, required:true},
    age:{type:Number, required:true},
})
const User = mongoose.model("User", userSchema);
module.exports = User