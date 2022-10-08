'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/product-controller')

router.get('/', controller.get);

router.get('/product/:id', controller.getById);

router.post('/', controller.post);

router.put('/product/:id', controller.put);

router.delete('/product/:id', controller.delete);

module.exports = router;