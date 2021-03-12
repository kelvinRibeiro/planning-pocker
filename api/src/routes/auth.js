'use strict'

const express = require('express')
const router = express.Router()

const controller = require('../controllers/auth')

/** 
* @swagger
* tags:
*   name: Auth  
*   description: Rota usada para autenticar um usuário.
*/

/** 
* @swagger
* paths:
*   /auth/authenticate:
*     post:
*       tags: [Auth]
*       summary: Welcome to swagger-jsdoc!
*       responses:
*         200:
*           description: Returns a mysterious string.
*/
router.post('/authenticate', controller.authenticate)

module.exports = router