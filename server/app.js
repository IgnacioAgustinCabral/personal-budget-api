const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');
const enveloperRouter = require('./envelope_router');

app.use(cors());
app.use(express.json());
app.use('/api/envelope',enveloperRouter);


const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Running server on port ${PORT}`);
});