const {encrypt, compare} = require("../utils/handleBcrypt");
const User = require("../models/User");

const register = async (username, email, password) => {
    const sameUsername = await User.findByPk(username) !== null;
    const sameEmail = await User.findOne({where: {email: email}}) !== null;
    if (sameUsername) {
        throw new Error("Username already exists");
    } else if (sameEmail) {
        throw new Error("Email already in use");
    }
    const encrypted = await encrypt(password);
    const newUser = await User.create({
        username: username,
        email: email,
        password: encrypted
    });
    return {
        username: newUser.username,
        email: newUser.email
    }
}

const login = async (username, password) => {
    const user = await User.findByPk(username);
    if (user === null) {
        throw new Error("Invalid user");
    }
    const correctPassword = await compare(password, user.dataValues.password);
    if (!correctPassword) {
        throw new Error("Wrong password");
    }
    return {
        username: username,
        login: true
    }
}

module.exports = {register, login};
