const {Sequelize, DataTypes} = require("sequelize");
const db = require("../db");

const Esporte = db.define("Esporte",
    {
        EsporteId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: Esporte, 
                key: 'id'
            }
        },
        EsporteNome : {
            type: DataTypes.String,
            allowNull: false
        },
        
    }
);

