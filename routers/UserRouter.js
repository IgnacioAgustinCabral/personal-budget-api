const router = require('express').Router();
const {
  getAllUsers,
  insertUser,
  userRegister,
} = require('../controllers/UserController');

router.get('/', getAllUsers);
router.post('/', insertUser);
router.get('/register', userRegister);

module.exports = router;
