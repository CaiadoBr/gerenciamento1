const {Sequelize, DataTypes} = require("sequelize");
const db = require("../db");


const Time = db.define("Time",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        nome : {
            type: DataTypes.STRING,
            allowNull: false
        },
        ListaJogadores : DataTypes.Array
    }
);

module.exports = Time;