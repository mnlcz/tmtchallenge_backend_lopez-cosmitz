const userService = require("../services/user.services");
const getProfile = async (req, res) => {
    try {
        const profile = await userService.getProfile(req.params.user);
        res.status(200);
        res.json(profile);
    } catch (err) {
        res.status(404);
        res.json({error: err.message});
    }
}

const getAll = async (req, res) => {
    try {
        const users = await userService.getAll();
        res.status(200);
        res.json(users);
    } catch (err) {
        res.status(404);
        res.json({error: err.message});
    }
}

module.exports = {getProfile, getAll};