const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const validate = require('../middlewares/validate');
const { validatePost, validatePostIdParam } = require('../validators/postValidator');

router.get('/', postController.getAllPosts);
router.post('/', validatePost, validate, postController.createPost);
router.delete('/:id', validatePostIdParam, validate, postController.deletePost);

module.exports = router;
