const pool = require("./database/db");

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
    if (result.rowCount !== 0) {
      res.status(200).json(result.rows);
    } else {
      res.status(404).json(`Envelope with id ${id} not found`);
    }
  } catch (err) {
    console.error(err.message);
  }
};
//POST NEW ENVELOPE
const createEnvelope = async (req, res) => {
  try {
    const { category_id, amount } = req.body;
    const result = await pool.query(
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
//PUT update an envelope
const updateEnvelope = async (req, res) => {
  try {
    const { id } = req.params;
    const { category_id, amount } = req.body;
    const result = await pool.query(
      "UPDATE envelopes SET category_id = $1, amount = $2 WHERE id = $3 ",
      [category_id, amount, id]
    );
    if (result.rowCount !== 0) {
      res.status(200).json(`envelope updated succesfully`);
    } else {
      res.status(400).json(`envelope with id ${id} failed, does not exists`);
    }
  } catch (err) {
    console.error(err.message);
  }
};
//DELETE ENVELOPE
const deleteEnvelope = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("DELETE FROM envelopes WHERE id = $1", [
      id,
    ]);
    res.status(200).json(`Envelope with id ${id} succesfully deleted`);
  } catch (err) {
    res.status(404).json(`Envelope with id ${id} not found. Was not deleted`);
    console.error(err.message);
  }
};

module.exports = {
  getEnvelopes,
  getEnvelopeById,
  createEnvelope,
  updateEnvelope,
  deleteEnvelope,
};
