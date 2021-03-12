'use strict'

const express = require('express')
const router = express.Router()

const controller = require('../controllers/user')
const auth = require('../packages/auth')

/** 
* @swagger
* tags:
*   name: User  
*   description: Cadastro de Usuários.
*/

/** 
* @swagger
* /user/all:
*   get:
*     tags: [User]
*     parameters:
*      -  name: x-access-token
*         in: header
*         description: Token do Usuário autenticado
*         required: true
*     summary: Listagem de usuários
*     responses:
*       200:
*         description: Retorna um array de objetos contendo as usuários cadastradas.
*       500: 
*         description: Retorna um possivel erro ao executar a operação
*/
router.get('/all',       auth.authorized, controller.all)

/** 
* @swagger
* /user/show:
*   get:
*     tags: [User]
*     parameters:
*      -  name: x-access-token
*         in: header
*         description: Token do Usuário autenticado
*         required: true
*      -  name: id
*         in: query
*         required: true
*         description: Id do usuário
*     summary: Exibe informações de um usuário pelo id
*     responses:
*       200:
*         description: Retorna um objeto com uma usuário especifica
*       500: 
*         description: Retorna um possivel erro ao executar a operação
*/
router.get('/show',      auth.authorized, controller.show)

/** 
* @swagger
* /user/add:
*   post:
*     tags: [User]
*     parameters:
*      -  name: x-access-token
*         in: header
*         description: Token do Usuário autenticado
*         required: true
*     summary: Cadastro de uma novo usuário
*     requestBody:
*         required: true
*         content:
*           application/json:
*             schema: 
*               type: object
*               properties:
*                 name:      
*                   type: string
*                 email:      
*                   type: string
*                 password:      
*                   type: string
*     responses:
*       200:
*         description: Retorna um objeto com a usuário cadastrado.
*       500: 
*         description: Retorna um possivel erro ao executar a operação
*/
router.post('/add',      auth.authorized, controller.add)

/** 
* @swagger
* /user/search:
*   post:
*     tags: [User]
*     parameters:
*      -  name: x-access-token
*         in: header
*         description: Token do Usuário autenticado
*         required: true
*     summary: Busca um usuário
*     requestBody:
*         required: true
*         content:
*           application/json:
*             schema: 
*               type: object
*               properties:
*                 keyword:      
*                   type: string
*     responses:
*       200:
*         description: Retorna um objeto com a usuário encontrada na busca.
*       500: 
*         description: Retorna um possivel erro ao executar a operação
*/
router.post('/search',   auth.authorized, controller.search)

/** 
* @swagger
* /user/update:
*   put:
*     tags: [User]
*     parameters:
*      -  name: x-access-token
*         in: header
*         description: Token do Usuário autenticado
*         required: true
*      -  name: id
*         in: query
*         required: true
*         description: Id do usuário
*     summary: Atualiza as informações de um usuário específico
*     requestBody:
*         required: true
*         content:
*           application/json:
*             schema: 
*               type: object
*               properties:
*                 name:      
*                   type: string
*                 email:      
*                   type: string
*                 password:      
*                   type: string
*     responses:
*       200:
*         description: Retorna um objeto com a usuário atualizado.
*       500: 
*         description: Retorna um possivel erro ao executar a operação
*/
router.put('/update',    auth.authorized, controller.update)


/** 
* @swagger
* /user/delete:
*   delete:
*     tags: [User]
*     parameters:
*      -  name: x-access-token
*         in: header
*         description: Token do Usuário autenticado
*         required: true
*      -  name: id
*         in: query
*         required: true
*         description: Id do usuário
*     summary: Remove uma usuário do Banco de Dados
*     responses:
*       200:
*         description: Retorna o status da transação.
*       500: 
*         description: Retorna um possivel erro ao executar a operação
*/
router.delete('/delete', auth.authorized, controller.delete)

module.exports = router