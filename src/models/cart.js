'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = require('./models/products');

const schema = new Schema({
    products:[{
        type: Product,
        required: true,
        trim: true
    }]

});

module.exports = mongoose.model('Cart', schema);