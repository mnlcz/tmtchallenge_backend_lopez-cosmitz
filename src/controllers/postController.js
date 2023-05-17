const postService = require("../services/post.services");


const getAll = async (req, res) => {
    try {
        let {page} = req.query;
        if (!page) {
            page = 1;
        }
        const posts = await postService.getAll(parseInt(page));
        res.status(200);
        res.json(posts);
    } catch (err) {
        res.status(404);
        res.json({error: err.message});
    }
}

const getByUser = async (req, res) => {
    try {
        let {page} = req.query;
        if (!page) {
            page = 1;
        }
        const posts = await postService.getByUser(req.params.user, page);
        res.status(200);
        res.json(posts);
    } catch (err) {
        res.status(404);
        res.json({error: err.message});
    }
}

const postPost = async (req, res) => {
    try {
        const {title, content} = req.body;
        const post = await postService.postPost(req.params.user, title, content);
        res.status(201);
        res.json(post);
    } catch (err) {
        res.status(403);
        res.json({error: err.message});
    }
}

const patchPost = async (req, res) => {
    try {
        const {content} = req.body;
        const post = await postService.patchPost(req.params.id, content);
        res.status(201);
        res.json(post);
    } catch (err) {
        res.status(403);
        res.json({error: err.message});
    }
}

module.exports = {getAll, getByUser, postPost, patchPost};