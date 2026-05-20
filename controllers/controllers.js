// Here we are using the fake data bases

let users =[{id:1, name:"Prajwal",age:45}];

// get All Uers 

const getUser = (req,res)=>{
res.json(users)    
}

// get Single User 
const getUserById = (req, res) => {
    const id = Number(req.params.id)
    const user = users.find((u)=>{
        return u.id == id;
    })
    res.json(user)
}

//createUser 

const createUser = (req,res)=>{
    const newUser = req.body;
    users.push(newUser);
    res.status(201).json({
        message:"The User is Created",
        data : newUser
    })
}

//update the user

const updateUser = (req, res)=>{
    const id = Number(req.params.id);
    const updateData = req.body;
    const userIndex = users.findIndex((v)=>v.id ==id);
     if (userIndex === -1) {
    return res.status(404).json({
      message: "User not found",
    });
  }

    users[userIndex] = {
    ...users[userIndex],
    ...updateData ,
  };
  res.json({
    message:"The user Has been updated Sucessfully",
    data: users[userIndex]
  })
}
//Delete User
const deleteUser = (req,res)=>{
    const id = Number(req.params.id);
    users = users.filter((v)=>{return v.id !==id});
    res.json({
        message:"user has been deleted"
    })
}

module.exports={
    getUser, getUserById, deleteUser, createUser,updateUser
}