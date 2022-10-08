'use strict'

const mongoose = require('mongoose');
const Cart = mongoose.model('Cart');

exports.get =  async(req, res, next) =>{
    const result = await Cart.find({});
    return result;
};

exports.getById = async(id) =>{
    const result = await Cart
    .findById(id)
    return result;
};

exports.create = async(data) =>{
    var Cart = new Cart(data);
    await Cart.save();
};

exports.put = async(id, data) =>{
   await Cart
    .findByIdAndUpdate(id,{
        $set:{
            products: data.products,
        }
    });
};

exports.del = async (id) =>{
    await Cart
        .findOneAndRemove(id);
}