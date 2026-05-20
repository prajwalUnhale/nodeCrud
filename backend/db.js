const mongoose= rquire("mongoose")
const connection = async()=>{
    try{
        await mongoose.connect(process.env.MongoURL)
        console.log("MongoDb Atlas is connected");
        
    }
    catch(e)
    {console.log(e.message);
        process.exit(1)
    }
}
module.exports = connection