'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    products:[{
        type: String,
        required: true,
        trim: true
    }]

});

module.exports = mongoose.model('Cart', schema);