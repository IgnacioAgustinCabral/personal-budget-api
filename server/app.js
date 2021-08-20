const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());


const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Running server on port ${PORT}`);
});