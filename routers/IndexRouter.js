const { Router } = require('express');
const renderIndex = require('../controllers/IndexController');

const router = Router();
router.get('/', renderIndex);

module.exports= router;