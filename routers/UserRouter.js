const router = require('express').Router();
const {
  getAllUsers,
  insertUser,
  userRegister,
  userLogin,
} = require('../controllers/UserController');

router.get('/', getAllUsers);
router.post('/', insertUser);
router.get('/register', userRegister);
router.get('/login', userLogin);

module.exports = router;
