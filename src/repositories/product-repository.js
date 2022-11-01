'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get =  async(req, res, next) =>{
    const result = await Product.find({});
    return result;
};

exports.getById = async(id) =>{
    const result = await Product
    .findById(id);
    return result;
};

exports.create = async(data) =>{
    var Product = new Product(data);
    await Product.save();
};

exports.put = async(id, data) =>{
    await Product
     .findByIdAndUpdate(id,{
         $set:{
            name: data.name,
            description: data.description,
            price: data.price,  
            quant : data.quant
         }
     });
 };
 
 exports.del = async (id) =>{
     await Product
         .findOneAndRemove(id);
 }