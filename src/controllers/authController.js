const authService = require("../services/auth.services");
const register = async (req, res) => {
    try {
        const {username, email, password} = req.body;
        const user = await authService.register(username, email, password);
        res.status(201);
        res.json(user);
    } catch (err) {
        res.status(404);
        res.json({error: err.message});
    }
}

const login = async (req, res) => {
    try {
        const {username, password} = req.body;
        const status = await authService.login(username, password);
        res.status(200);
        res.json(status);
    } catch (err) {
        res.status(404);
        res.json({error: err.message});
    }
}

module.exports = {register, login};
