'use strict'

const express = require('express')
const router = express.Router()

/** 
* @swagger
* /status:
*  get:
*    description: Welcome to swagger-jsdoc!
*     responses:
*       200:
*         description: Returns a mysterious string.
*/
router.get('/status', (req, res, next) => {
  res.status(200).send({
    title: 'Node API is Running',
    version: '1.0.0'
  })
})

module.exports = router
