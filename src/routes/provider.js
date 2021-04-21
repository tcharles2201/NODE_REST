const express = require('express');
const router = express.Router();

const controller = require('../controllers/provider');

router.get('/listAllProviders', controller.listAllProviders);

router.get('/:idProvider', controller.getProviderById);

router.put('/addProvider', controller.addProvider);

router.patch('/updateProvider', controller.updateProvider);

router.delete('/deleteProvider', controller.deleteProvider);

module.exports = router;