//DATABASE CONNECTION 
const Sequelize = require('sequelize');
require('dotenv').config();
module.exports = new Sequelize(`postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`,{
    logging:true //SACA LOS EXECUT DEFAULT DE LA CONSOLA
});