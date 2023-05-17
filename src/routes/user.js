const router = require("express").Router();
const userController = require("../controllers/userController");

router.get("/profile/:user", userController.getProfile);

router.get("/users", userController.getAll);

module.exports = router;