const {Sequelize, DataTypes} = require("sequelize");
const db = require("../db/database");

const User = db.define("users", {
    username: {
        type: DataTypes.STRING(15),
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING(80),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(255),
        isNull: false
    }
}, {
    timestamps: false,
    createdAt: false,
    updatedAt: false
});

module.exports = User;