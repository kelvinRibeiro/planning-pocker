'use strict'

const model  = require('../models')
const utils  = require('../packages/utils')
const salt = 'a@#1$A'

const jwt 	 = require('jsonwebtoken')
const bcrypt = require('bcrypt')

exports.authenticate = (req, res, callback) => {
  
  model.users.findOne({ where: { email: req.body.email } }).then( async (data) => {
   
		if(!data || data == ''){
			res.status(401)
			utils.callback(res, utils.response('Falha na autenticação! Usuário não encontrado.'))
			return
		}
   
		if(!bcrypt.compareSync(req.body.password, data.password )) {
			res.status(401)
			utils.callback(res, utils.response('Falha na autenticação! Usuário ou senha incorreto(s)'))
			return
		} else {

			let claim = {
				hostname: req.hostname,
				ip: 			req.ip,
				sub: {
					id: 		data.id,
					name: 	data.name,
					email: 	data.email
				}	
			}

			const token = jwt.sign(claim, salt, { expiresIn: '7d' })
     
			utils.callback(res, utils.response(null, { token } ) )

		}
		
  }).catch( (err) => {
		res.status(500)
    utils.callback(res, utils.response(err))
  })
}