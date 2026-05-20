const mongoose= require("mongoose")
const connectDB = async()=>{
    try{
        mongoose.connect(
  process.env.MongoURL
)
.then(() => {
    console.log("MongoDB Connected");
})
.catch((error) => {
    console.log("FULL ERROR:");
    console.log(error);
});
        console.log("MongoDb Atlas is connected");
        
    }
    catch(e)
    {console.log(e.message);
        process.exit(1)
    }
}
module.exports = connectDB