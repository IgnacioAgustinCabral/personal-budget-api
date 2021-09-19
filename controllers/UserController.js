const model = require('../models');
const User = model.User;

//console.log(User);
const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
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
    return res.status(200).json(user);
  } catch (err) {
    console.log(err);
    return res.status(401).json({ error: err.message });
  }
};

const userRegister = (req, res) => {
  res.render('users/register');
};

const userLogin = (req, res) => {
  res.render('users/login');
};

module.exports = {
  getAllUsers,
  insertUser,
  userRegister,
  userLogin
};
