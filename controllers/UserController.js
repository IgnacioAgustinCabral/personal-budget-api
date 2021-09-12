const model = require('../models');
const User = model.User;

//console.log(User);
const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    console.log(users);
    return res.status(200).json(users);
  } catch (err) {
    console.log(err);
    return res.status(401).json({ error: err.message });
  }
};

const insertUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.create({
      username,
      email,
      password,
    });
    console.log(user);
    return res.status(200).json(user);
  } catch (err) {
    console.log(err);
    return res.status(401).json({ error: err.message });
  }
};

module.exports = {
  getAllUsers,
  insertUser,
};