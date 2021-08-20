const pool = require("./database/pool");

//QUERIES

//GET ALL
const getEnvelopes = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM envelopes");
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err.message);
  }
};

const getEnvelopeById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM envelopes WHERE id=$1", [
      id,
    ]);
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(404).json(`Envelope with id ${id} not found`);
  }
};
//POST NEW ENVELOPE
const createEnvelope = async (req, res) => {
  try {
    const { category_id, amount } = req.body;
    const result = pool.query(
      "INSERT INTO envelopes(category_id,amount) VALUES($1,$2) RETURNING id",
      [category_id, amount]
    );
    res.status(201).json(`New envelope created with id ${result.rows[0].id}`);
  } catch (err) {
    console.error(err.message);
    res
      .status(400)
      .json(`Envelope failed to create due to incorrect category id or amount`);
  }
};
