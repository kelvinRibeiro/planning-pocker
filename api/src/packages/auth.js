'use strict'

const jwt = require('jsonwebtoken')
const salt = 'a@#1$A'

exports.authorized = (req, res, next) => {

  let token = req.headers['x-access-token']

  if (!token) {
    res.status(401).json({ message: 'Acesso restrito.'})

  } else {
    
    jwt.verify(token, salt, (error, decoded) => {
      if (error) {
        res.status(422).json({
          message: 'Ocorreu um erro na verificação do token.'
        })
      } else {
        next()  
      }
    })
  }
}
