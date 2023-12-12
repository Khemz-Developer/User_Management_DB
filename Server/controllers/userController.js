const User = require("../models/User");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch {
    res.status(500).json({ message: "Error:" + error.message });
  }
};

const createUser = async (req, res) => {
  const { name, email, jobTitle, company } = req.body;
  try {
    const newUser = await User.create({
      name,
      email,
      jobTitle,
      company,
    });
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error: " + error.message });
  }
};

const deleteUser = async (req, res) => {
  const userId = req.params.id;
  try {
    const deleteUser = await User.findByIdAndDelete(userId);
    if (!deleteUser) {
      res.status(404).json({ message: "User not found!" });
    }
    res.status(200).json({ message: "User was deleted!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error: " + error.message });
  }
};

const updateUser = async (req, res) => {
    const userId = req.params.id;
    const { name, email, jobTitle, company } = req.body;
  
  
    try {
      // Find the user by ID and update the fields
     const updatedUser = await User.findByIdAndUpdate(
        userId,
        { name, email, jobTitle, company },
        { new: true, runValidators: true }
      );
    } catch (error) {
      
      res.status(500).json({ message: 'Error: ' + error.message });
    }
  };
const singleUser  =async(req,res)=>{
  const userId = req.params.id;
  try{
    const user=await User.findById(userId);
    if(!user){
      return res.status(404).json({message:"User Not Found!"})
    }
    res.status(200).json(user);
  }catch(error){
    res.status(500).json({ message: 'Error: ' + error.message });
  }
}

module.exports = {
  getAllUsers,
  createUser,
  deleteUser,
  updateUser,
  singleUser
};
