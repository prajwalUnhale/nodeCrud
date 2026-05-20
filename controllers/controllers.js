// Here we are using the fake data bases

const User = require("../models/userModel");

let users =[{id:1, name:"Prajwal",age:45}];

// get All Uers 

// const getUser = (req,res)=>{
// res.json(users)    
//}


const getUser = async(req,res)=>{
try{
    const users = await User.find();
    res.json(users);
}
catch(error)
{
    res.status(500).json({
        message : error.message
    })
}
}

// get Single User 
// const getUserById = (req, res) => {
//     const id = Number(req.params.id)
//     const user = users.find((u)=>{
//         return u.id == id;
//     })
//     res.json(user)
// }

const getUserById = async(req,res)=>{
    // /Checking if the user Exist or Not
    try{
        const user = await User.findById(req.params.id);
        if(!user){
        return res.status(404).json(
            {message:"User is not Found"})}
    res.json(user)
    }
    catch(error)
    {
        res.status(500).json({
            message:error.message
        })
    }
}




//? This is the createUser with the sample Data

// const createUser = (req,res)=>{
//     const newUser = req.body;
//     users.push(newUser);
//     res.status(201).json({
//         message:"The User is Created",
//         data : newUser
//     })
// }

// This is the create user with the MongoDB atlas
const createUser = async (req,res)=>{
    try{

        console.log("BODY:", req.body);

        const user = await User.create(req.body);

        console.log("CREATED:", user);

        res.status(201).json(user);

    }catch(error){

        console.log("CREATE ERROR:", error);

        res.status(500).json({
            message:error.message
        });
    }
}
//update the user

// const updateUser = (req, res)=>{
//     const id = Number(req.params.id);
//     const updateData = req.body;
//     const userIndex = users.findIndex((v)=>v.id ==id);
//      if (userIndex === -1) {
//     return res.status(404).json({
//       message: "User not found",
//     });
//   }

//     users[userIndex] = {
//     ...users[userIndex],
//     ...updateData ,
//   };
//   res.json({
//     message:"The user Has been updated Sucessfully",
//     data: users[userIndex]
//   })
// }

const updateUser=async(req,res)=>{
 try{
    const updatedUser = await User.findByIdAndUpdate(req.params.id,
        req.body,
        {
            new:true,
            runValidators:true
        }
    )
    if(!updatedUser){
        return res.status(404).json({message:"User not Found"})
    }
    res.json({
        message:"User has been updated SuccessFully",
        data:updatedUser
    })
 }
 catch(error)
 {
    res.status(500).json({
        message:error.message
    })
 }
}


//Delete User
// const deleteUser = (req,res)=>{
//     const id = Number(req.params.id);
//     users = users.filter((v)=>{return v.id !==id});
//     res.json({
//         message:"user has been deleted"
//     })
// }

const deleteUser= async (req,res)=>{
    try{
        const deletedUser = await User.findByIdAndDelete(req.params.id,);
        if(!deletedUser){
           return res.status(404).json({message:"User not Found"})
        }
        res.json({message:"User deleted Sucessfully"})
    }
    catch(error)
    {
        res.status(500).json({message:error.message})
    }
}

module.exports={
    getUser, getUserById, deleteUser, createUser,updateUser
}