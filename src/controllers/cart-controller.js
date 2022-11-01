'use strict'

const repository = require('../repositories/cart-repository')
const md5 = require('md5')

exports.get = async (req, res, next) => {
  try {
    var data = await repository.get()
    console.log('cart - get - all carts');
    res.status(200).send(data);
  } catch (erro) {
    res.status(500).send({
      message: 'Falha ao processar sua requisição'
    })
  }
}

exports.getById = async (req, res, next) => {
  try {
    let id = req.params.id;
    var data = await repository.getById(id);
    console.log(`cart - getById - id[${id}]`);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({
      message: 'Falha ao processar sua requisição'
    })
  }
}

exports.post = async (req, res, next) => {
  console.log('cart:', req.body);
  try {
    await repository.create({
      products: req.body.products
    })
    res.status(201).send({
      message: 'Success'
    });
    console.log('cart - create');
    console.log('cart:', req.body);
  } catch (erro) {
    console.log(erro)
    res.status(500).send({
      message: 'Falha ao processar sua requisição'
    })
  }
}

exports.put = async (req, res, next) => {
  try {
    let id = req.params.id;
    await repository.put(id, req.body);
    res.status(201).send({
      message: 'Dados do paciente foram atualizados com sucesso'
    });
    console.log(`cart - update - id[${id}]`);
    console.log('cart:' + req.body);
  } catch (erro) {
    res.status(500).send({
      message: 'Falha ao processar sua requisição'
    })
  }
}

exports.delete = async (req, res, next) => {
  try {
    let id = req.params.id
    await repository.del(id)
    res.status(200).send({
      message: 'Paciente removido com successo com sucesso'
    });
    console.log(`cart - delete - id[${id}]`)
  } catch (erro) {
    res.status(500).send({
      message: 'Falha ao processar sua requisição'
    })
  }
}
