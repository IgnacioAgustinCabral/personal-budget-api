const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());


const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Running server on port ${PORT}`);
});