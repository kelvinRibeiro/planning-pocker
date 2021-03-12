'use strict'

const model = require('../models')
const utils = require('../packages/utils')
const socket_base = 'history'

exports.all = (req, res) => {

  model.histories.findAll({ 
    order: [['createdAt', 'DESC']], 
    limit: req.query.limit, 
    offset: req.query.offset 

  }).then( async (data) => {

    utils.callback(res, utils.response(null, data ))
  }).catch( (err) => {

    res.status(500)
    utils.callback(res, utils.response(err))
  })
}

exports.show = (req, res) => {

  model.histories.findOne({ where: { id: req.query.id } }).then( (data) => {
    utils.callback(res, utils.response(null, data))
  }).catch( (err) => {

    res.status(500)
    utils.callback(res, utils.response(err))
  })
}

exports.add = (req, res) => {
  model.histories.create(req.body).then( (data) => {
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
        { description: { [model.Sequelize.Op.iLike]: `%${ req.body.keyword }%` } }
      ] 
    } },
    order: [['createdAt', 'DESC']]
  }
  
  model.histories.findAll(query).then( (data) => {
    utils.callback(res, utils.response(null, data))
  }).catch( (err) => {

    res.status(500)
    utils.callback(res, utils.response(err))
  })
}

exports.update = (req, res) => {
  
  model.histories.update(req.body, { where: { id: req.query.id } }).then( (data) => {
    utils.callback(res,  utils.response(null, data))
  }).catch( (err) => {

    res.status(500)
    utils.callback(res, utils.response(err))
  })
}

exports.delete = (req, res) => {

  model.histories.destroy({ where: { id: req.query.id } }).then( (data) => {
    utils.callback(res, utils.response(null, data))
  }).catch( (err) => {
    
    res.status(500)
    utils.callback(res, utils.response(err))
  })
}