const bcrypt = require("bcrypt");

const encrypt = async (text) => {
    return await bcrypt.hash(text, 10);
}

const compare = async (plain, hash) => {
    return await bcrypt.compare(plain, hash);
}

module.exports = {encrypt, compare};