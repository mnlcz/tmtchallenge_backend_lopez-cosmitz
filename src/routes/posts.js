const router = require("express").Router();
const postController = require("../controllers/postController");

router.get("/posts", postController.getAll);

router.get("/posts/:user", postController.getByUser);

router.post("/posts/:user", postController.postPost);

router.patch("/posts/:id", postController.patchPost);

module.exports = router;