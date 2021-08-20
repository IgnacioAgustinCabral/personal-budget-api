const express = require('express');
const db = require('../categories.js');
const categoryRouter = express.Router();

categoryRouter.get('/',db.getCategories);
categoryRouter.post('/',db.createCategory);

module.exports = categoryRouter;