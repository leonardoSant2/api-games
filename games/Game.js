const Sequelize = require('sequelize');
const connection = require('../database/database');

const Game = connection.define('games', {
    title:{
        type: Sequelize.STRING,
        allowNull: false
    }, 
    year: {
        type: Sequelize.INTEGER,
        allowNull: false
    }, 
    price: {
        type: Sequelize.DECIMAL(2,2),
        allowNull: false
    }
});



module.exports = Game;