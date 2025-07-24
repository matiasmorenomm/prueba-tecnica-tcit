const { Post } = require('../models');

const getAllPosts = async (req, res) => {
    const posts = await Post.findAll();
    res.json(posts);
};

const createPost = async (req, res) => {
    const { name, description } = req.body;
    const newPost = await Post.create({ name, description });
    res.status(200).json(newPost);
};

const deletePost = async (req, res) => {
    const post = await Post.findByPk(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post no encontrado' });

    await post.destroy();
    res.status(200).json(post);
};

module.exports = {
    getAllPosts,
    createPost,
    deletePost,
}