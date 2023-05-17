const Post = require("../models/Post");
const User = require("../models/User");
const {where} = require("sequelize");
const getAll = async () => {
    return await Post.findAll({
        order: [["creationdate", "DESC"]]
    });
}

const getByUser = async (username) => {
    return await Post.findAll({
        where: {username: username},
        order: [["creationdate", "DESC"]]
    });
}

const postPost = async (username, title, content) => {
    const user = await User.findByPk(username);
    if (user === null) {
        throw new Error("Invalid user");
    }
    return await Post.create({
        username: username,
        title: title,
        content: content,
        creationdate: new Date()
    });
}

const patchPost = async (id, content) => {
    let dbPost = await Post.findByPk(id);
    if (dbPost === null) {
        throw new Error("Invalid post");
    }
    const post = await Post.update(
        {
            content: content
        },
        {
            where: {
                id: id
            }
        }
    );
    dbPost = await Post.findByPk(id);
    return dbPost;
}

module.exports = {getAll, getByUser, postPost, patchPost};