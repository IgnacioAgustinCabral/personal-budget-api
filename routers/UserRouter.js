const router = require('express').Router();
const { getAllUsers, insertUser } = require('../controllers/UserController');

router.get('/', getAllUsers);
router.post('/', insertUser);

module.exports = router;
