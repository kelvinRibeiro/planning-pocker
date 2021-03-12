'use strict'

const model = require('../models')
const utils = require('../packages/utils')
const socket_base = 'card'

exports.all = (req, res) => {

  model.cards.findAll({ 
    order: [['createdAt', 'DESC']], 
    limit: req.query.limit, 
    offset: req.query.offset 

  }).then( async (data) => {

    let count = await model.cards.count()
    utils.callback(res, utils.response(null, data ))
  }).catch( (err) => {

    res.status(500)
    utils.callback(res, utils.response(err))
  })
}

exports.show = (req, res) => {

  model.cards.findOne({ where: { id: req.query.id } }).then( (data) => {
    utils.callback(res, utils.response(null, data))
  }).catch( (err) => {

    res.status(500)
    utils.callback(res, utils.response(err))
  })
}

exports.add = (req, res) => {
  model.cards.create(req.body).then( (data) => {
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
        { value: { [model.Sequelize.Op.iLike]: `%${ req.body.keyword }%` } }
      ] 
    } },
    order: [['createdAt', 'DESC']]
  }
  
  model.cards.findAll(query).then( (data) => {
    utils.callback(res, utils.response(null, data))
  }).catch( (err) => {

    res.status(500)
    utils.callback(res, utils.response(err))
  })
}

exports.update = (req, res) => {
  
  model.cards.update(req.body, { where: { id: req.query.id } }).then( (data) => {
    utils.callback(res,  utils.response(null, data))
  }).catch( (err) => {

    res.status(500)
    utils.callback(res, utils.response(err))
  })
}

exports.delete = (req, res) => {

  model.cards.destroy({ where: { id: req.query.id } }).then( (data) => {
    utils.callback(res, utils.response(null, data))
  }).catch( (err) => {
    
    res.status(500)
    utils.callback(res, utils.response(err))
  })
}