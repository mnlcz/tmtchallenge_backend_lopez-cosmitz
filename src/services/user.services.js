const User = require("../models/User");

const getProfile = async (username) => {
    const user = await User.findByPk(username);
    if (user === null) {
        throw new Error("Unknown user");
    }
    return {
        username: user.username,
        email: user.email
    };
};

const getAll = async () => {
    return await User.findAll({
        attributes: ["username", "email"]
    });
}

module.exports = {getProfile, getAll};
