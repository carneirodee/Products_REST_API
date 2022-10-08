'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/cart-controller')


router.get('/cart/:id', controller.getById);

router.get('/', controller.get);

router.post('/', controller.post);

router.put('/cart/:id',controller.put);

router.delete('/cart/:id', controller.delete);

module.exports = router;