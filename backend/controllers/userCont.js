const UserModel = require("../models/userModel");

exports.addUser = async (req, res) => {
  const userdetails = req.body;
  console.log(userdetails);
  try {
    const User = await UserModel.create(userdetails);
    res.status(201).json({ user: User, message: "User Created successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUser = async (req, res) => {
  try {
    const User = await UserModel.aggregate([{ $match: {} }]);
    res.status(200).json({ user: User });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.editUser = async (req, res) => {
  const { userID } = req.params;
  const userdetails = req.body;
  console.log(userID, userdetails);
  try {
    await UserModel.findByIdAndUpdate({ _id: userID }, userdetails);
    res.status(200).json({ message: "User Updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  const { userID } = req.params;
  try {
    await UserModel.findByIdAndDelete(userID);
    res.status(200).json({ message: "User Deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
