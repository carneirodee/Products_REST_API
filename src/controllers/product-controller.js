'use strict'

const repository = require('../repositories/product-repository')
const md5 = require('md5')

exports.get = async (req, res, next) => {
  try {
    var data = await repository.get()
    console.log('product - get - all products')
    res.status(200).send(data)
  } catch (erro) {
    res.status(500).send({
      message: 'Falha ao processar sua requisição'
    })
  }
}

exports.getById = async (req, res, next) => {
  try {
    let id = req.params.id
    var data = await repository.getById(id)
    console.log(`product - getById - id[${id}]`)
    res.status(200).send(data)
  } catch (e) {
    res.status(500).send({
      message: 'Falha ao processar sua requisição'
    })
  }
}

exports.post = async (req, res, next) => {
  console.log('product - create');
  console.log('product:', req.body);

  try {
    await repository.create({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      quant: req.body.quant
    })

    res.status(200).send({
      message: 'Success'
    });

    console.log('product - create');
    console.log('product:', req.body);
  } catch (erro) {
    console.log(erro)
    res.status(500).send({
      message: 'Falha ao processar sua requisição ' + erro
    })
  }
}

exports.put = async (req, res, next) => {
  try {
    let id = req.params.id;
    await repository.put(req.params.id, req.body)
    res.status(201).send({
      message: 'Dados do médico foram atualizados com sucesso'
    });
    console.log(`product - update - id[${id}]`);
    console.log('product:' + req.body);
  } catch (erro) {
    res.status(500).send({
      message: 'Falha ao processar sua requisição'
    })
  }
}

exports.delete = async (req, res, next) => {
  try {
    let id = req.params.id;
    await repository.del(id);
    res.status(200).send({
      message: 'Médico removido com successo com sucesso'
    });
    console.log(`product - delete - id[${id}]`);
  } catch (erro) {
    res.status(500).send({
      message: 'Falha ao processar sua requisição'
    })
  }
}
