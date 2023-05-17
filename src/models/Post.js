const {DataTypes} = require("sequelize");
const db = require("../db/database");

const Post = db.define("posts", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    username: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    title: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    creationdate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    content: {
        type: DataTypes.STRING(500),
        allowNull: false
    }
}, {
    timestamps: false,
    createdAt: false,
    updatedAt: false
});

module.exports = Post;