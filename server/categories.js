const pool = require('./database/db');

//QUERIES

//GET
const getCategories = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM categories');
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err.message);
  }
};

//POST-CREATE NEW CATEGORY
const createCategory = async (req, res) => {
  try {
    const { description } = req.body;
    const result = await pool.query(
      'INSERT INTO categories(description) VALUES ($1) RETURNING id',
      [description]
    );
    res.status(201).json(`New category created with id ${result.rows[0].id}`);
  } catch (err) {
    console.error(err.message);
    res.status(400).json(`ERROR! categories must be unique`);
  }
};
//PUT
const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const result = await pool.query(
      'UPDATE categories SET description = $1 WHERE id = $2',
      [description, id]
    );

    if (result.rowCount !== 0) {
      res.status(200).json('Category updated successfully');
    } else {
      res
        .status(400)
        .json(`Category with id ${id} not found. Unable to update`);
    }
  } catch (err) {
    console.error(err.message);
  }
};

//DELETE
const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      'DELETE FROM categories WHERE id = $1 RETURNING *',
      [id]
    );
    if (result.rowCount !== 0) {
      res.status(200).json(`Category with id ${id} deleted successfully`);
    } else {
      res.status(404).json('ERROR.Category not found');
    }
  } catch (err) {
    console.error(err.message);
  }
};
module.exports = {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
};
