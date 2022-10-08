'use strict'

const config = require('../config')
const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(config.sendgridKey)

exports.send = async (to, subject, body) => {
  const msg = {
    to: to, // Change to your recipient
    from: 'deysedayane.o.c@gmail.com', // Change to your verified sender
    subject: subject,
    text: body,
    html: `<strong>${body}</strong>, seja bem vindo ao teste da 2ª Etapa da Salvus`
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent to '+ to)
    })
    .catch(error => {
      console.error(error)
    })
}
