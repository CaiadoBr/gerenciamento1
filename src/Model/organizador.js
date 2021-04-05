const {Sequelize, DataTypes} = require("sequelize");
const db = require("../db");

const Organizador = db.define("Organizador",
    {
        Id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: Organizador, 
                key: 'id'
            }
        },
    
    }
);

