'use strict'

const repository = require('../repositories/product-repository')
const md5 = require('md5')

exports.get = async (req, res, next) => {
  try {
    var data = await repository.get()
    console.log('product - get - all products');
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
    console.log(`product - getById - id[${id}]`);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({
      message: 'Falha ao processar sua requisição'
    })
  }
}

exports.post = async (req, res, next) => {
  try {
    await repository.create({
      nome: req.body.nome,
      senha: md5(req.body.senha + global.SALT_KEY),
      cpf: req.body.cpf,
      email: req.body.email,
      telefone: req.body.telefone,
      status: req.body.status,
      cep: req.body.cep,
      rua: req.body.rua,
      complemento: req.body.complemento,
      bairro: req.body.bairro,
      cidade: req.body.cidade,
      estado: req.body.estado,
      operadora: req.body.operadora,
      historico: req.body.historico,
      homeCare: req.body.homeCare,
      prescricoes: req.body.prescricoes
    })
    emailService.send(
      req.body.email,
      'Bem-vindo ao Salvus Teste da 2ª Etapa',
      global.EMAIL_TMPL.replace('{0}', req.body.nome)
    )
    res.status(201).send({
      message: 'Paciente cadastrado com sucesso'
    });
    console.log('product - create');
    console.log('Product:', req.body);
  } catch (erro) {
    res.status(500).send({
      message: 'Falha ao processar sua requisição'
    })
  }
}
exports.authenticate = async (req, res, next) => {
  try {
    const product = await repository.authenticate({
      email: req.body.email,
      senha: md5(req.body.senha + global.SALT_KEY)
    })
    if (!product) {
      console.log('product - auth - not_found');
      res.status(404).send({
        message: 'Usuário ou Senha inválidos'
      });
      return
    }
    console.log(
      `product - auth - email[${req.body.email}] - senha[${req.body.senha}]`
    );
    const token = await authService.generateToken({
      email: product.email,
      nome: product.nome
    });
    res.status(201).send({
      token: token,
      data: {
        email: product.email,
        nome: product.email
      },
      message: 'Autenticação feita com sucesso'
    })
  } catch (erro) {
    res.status(500).send({
      message: 'Falha ao processar sua requisição' + erro
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
    console.log(`product - update - id[${id}]`);
    console.log('Product:' + req.body);
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
    console.log(`product - delete - id[${id}]`)
  } catch (erro) {
    res.status(500).send({
      message: 'Falha ao processar sua requisição'
    })
  }
}
