const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');
const app = express();

mongoose.connect(config.connectionString, {useNewUrlParser: true});

const indexRoutes = require('./routes/index-route');
const productsRoutes = require('./routes/cart-route');
const cartsRoutes = require('./routes/cart-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use('/', indexRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/carts', cartsRoutes);


module.exports = app;