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
const createCategory = async (req,res)=>{
    try {
        const {description} = req.body;
        const result = await pool.query('INSERT INTO categories(description) VALUES ($1) RETURNING id',[description]);
        res.status(201).json(`New category created with id ${result.rows[0].id}`)
        console.log(result);

    } catch (err) {
        console.error(err.message);
        res.status(400).json(`ERROR! categories must be unique`);
    }
}


module.exports = {
    getCategories,
    createCategory
};