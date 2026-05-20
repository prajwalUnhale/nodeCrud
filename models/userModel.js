const mongoose = require("mongoose");
// create Schema 
const userSchema = new mongoose.Schema({
    name:{tpye:String, require:true},
    age:{type:Number, require:true},
})
const User = mongoose.model("User", userSchema);
module.exports = User