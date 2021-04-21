const express = require('express');
const router = express.Router();

const controller = require('../controllers/post');

router.get('/listAllPosts', controller.listAllPosts);

router.get('/:id', controller.getById);

router.put('/add', controller.add);

router.patch('/update', controller.update);

router.delete('/delete', controller.delete);

module.exports = router;