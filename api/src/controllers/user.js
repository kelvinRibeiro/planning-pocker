'use strict'

const model = require('../models')
const utils = require('../packages/utils')
const socket_base = 'user'

const bcrypt = require('bcrypt')

exports.all = (req, res) => {

  model.users.findAll({
    attributes: {
			exclude: ['password']
    }, 
    order: [['createdAt', 'DESC']], 
    limit: req.query.limit, 
    offset: req.query.offset 

  }).then( async (data) => {

    utils.callback(res, utils.response(null, data))
  }).catch( (err) => {
    
    res.status(500)
    utils.callback(res, utils.response(err))
  })
}

exports.show = (req, res) => {

  model.users.findOne({ 
    attributes: {
			exclude: ['password']
    },
    where: { id: req.query.id } 
  }).then( (data) => {
    utils.callback(res, utils.response(null, data))
  }).catch( (err) => {

    res.status(500)
    utils.callback(res, utils.response(err))
  })
}

exports.add = (req, res) => {

  req.body.password =	bcrypt.hashSync(req.body.password, 10)

  model.users.create(req.body).then( (data) => {
    delete data.password
    utils.callback(res,  utils.response(null, data))
  }).catch( (err) => {

    res.status(500)
    utils.callback(res, utils.response(err))
  })
}


exports.search = (req, res) => {

  let query = {
    where: { [model.Sequelize.Op.and]: { 
      [model.Sequelize.Op.or]: [
        { name: { [model.Sequelize.Op.iLike]: `%${ req.body.keyword }%` } },
        { email: { [model.Sequelize.Op.iLike]: `%${ req.body.keyword }%` } }
      ] 
    } },
    order: [['createdAt', 'DESC']]
  }
  
  model.users.findAll(query).then( (data) => {
    utils.callback(res, utils.response(null, data))
  }).catch( (err) => {

    res.status(500)
    utils.callback(res, utils.response(err))
  })
}

exports.update = (req, res) => {

  if (req.body.password) {
		req.body.password = bcrypt.hashSync(req.body.password, 10)
	} else {
		delete req.body.password
	}
  
  model.users.update(req.body, { where: { id: req.query.id } }).then( (data) => {
    delete data.password
    utils.callback(res,  utils.response(null, data))
  }).catch( (err) => {

    res.status(500)
    utils.callback(res, utils.response(err))
  })
}

exports.delete = (req, res) => {

  model.users.destroy({ where: { id: req.query.id } }).then( (data) => {
    utils.callback(res, utils.response(null, data))
  }).catch( (err) => {
    
    res.status(500)
    utils.callback(res, utils.response(err))
  })
}