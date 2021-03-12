'use strict'

const model = require('../models')
const utils = require('../packages/utils')
const socket_base = 'vote'

exports.all = (req, res) => {

  model.votes.findAll({ 
    include:[
      { model: model.users, as: 'users', attributes:['name']},
      { model: model.cards, as: 'cards', attributes:['value']},
      { model: model.histories, as: 'histories', attributes:['description']}
    ],
    
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

  model.votes.findOne({ 
    include:[
      { model: model.users, as: 'users'},
      { model: model.cards, as: 'cards'},
      { model: model.histories, as: 'histories'}
    ],
    where: { id: req.query.id } 
  }).then( (data) => {
    utils.callback(res, utils.response(null, data))
  }).catch( (err) => {

    res.status(500)
    utils.callback(res, utils.response(err))
  })
}

exports.add = (req, res) => {
  model.votes.create(req.body).then( (data) => {
    utils.callback(res,  utils.response(null, data), `${ socket_base }_new`)
  }).catch( (err) => {

    res.status(500)
    utils.callback(res, utils.response(err))
  })
}

exports.update = (req, res) => {
  
  model.votes.update(req.body, { where: { id: req.query.id } }).then( (data) => {
    utils.callback(res,  utils.response(null, data))
  }).catch( (err) => {

    res.status(500)
    utils.callback(res, utils.response(err))
  })
}

exports.delete = (req, res) => {

  model.votes.destroy({ where: { id: req.query.id } }).then( (data) => {
    utils.callback(res, utils.response(null, data))
  }).catch( (err) => {
    
    res.status(500)
    utils.callback(res, utils.response(err))
  })
}