var express = require('express');
var router = express.Router();

const service = require('../services/post');

router.get('/:id', service.getById);

router.put('/add', service.add);

router.patch('/update', service.update);

router.delete('/delete', service.delete);

module.exports = router;