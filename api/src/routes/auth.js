'use strict'

const express = require('express')
const router = express.Router()

const controller = require('../controllers/auth')

/** 
* @swagger
* tags:
*   name: Auth  
*   description: Autenticação de usuários.
*/

/** 
* @swagger
* paths:
*   /auth/authenticate:
*     post:
*       tags: [Auth]
*       summary: Recebe informações e autentica um usuário 
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema: 
*               type: object
*               properties:
*                 email:      
*                   type: string
*                 password:
*                   type: string
*       responses:
*         200:
*           description: Retorna um token de usuário.
*         401: 
*           description: Retorna um possivel erro na Autenticação.
*         500: 
*           description: Retorna um possivel erro do Banco de Dados.

*/
router.post('/authenticate', controller.authenticate)

module.exports = router