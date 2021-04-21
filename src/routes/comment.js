const express = require('express');
const router = express.Router();

const controller = require('../controllers/post');

router.get('/listAllPosts', controller.listAllComments);

router.get('/:id', controller.getCommentById);

router.put('/add', controller.addComment);

router.patch('/update', controller.updateComment);

router.delete('/delete', controller.deleteComment);

module.exports = router;