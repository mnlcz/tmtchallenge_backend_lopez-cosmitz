const Post = require("../models/Post");
const User = require("../models/User");
const POSTS_PER_PAGE = 3;

const getAll = async (page) => {
    const skip = (page - 1) * POSTS_PER_PAGE;
    return await Post.findAll({
        order: [["creationdate", "DESC"]],
        limit: POSTS_PER_PAGE,
        offset: skip
    });
}

const getByUser = async (username, page) => {
    const skip = (page - 1) * POSTS_PER_PAGE;
    return await Post.findAll({
        where: {username: username},
        order: [["creationdate", "DESC"]],
        limit: POSTS_PER_PAGE,
        offset: skip
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
    await Post.update(
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