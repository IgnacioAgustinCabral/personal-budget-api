const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');
// const enveloperRouter = require('./routers/envelope_router');
// const categoryRouter = require('./routers/categories_router');
const db = require('./database/db.config');

app.use(cors());
app.use(express.json());
// app.use('/api/envelope', enveloperRouter);
// app.use('/api/category', categoryRouter);

const PORT = process.env.PORT;

db.authenticate()
  .then(() => console.log('Connection established successfully'))
  .catch((err) => console.log(`Error ${err}`));

app.listen(PORT, () => {
  console.log(`Running server on port ${PORT}`);
});
