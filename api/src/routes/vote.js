'use strict'

const express = require('express')
const router = express.Router()

const controller = require('../controllers/vote')
const auth = require('../packages/auth')

/** 
* @swagger
* tags:
*   name: Vote  
*   description: Cadastro de Votos.
*/

/** 
* @swagger
* /vote/all:
*   get:
*     tags: [Vote]
*     parameters:
*      -  name: x-access-token
*         in: header
*         description: Token do usuário autenticado
*         required: true
*     summary: Listagem de votos
*     responses:
*       200:
*         description: Retorna um array de objetos contendo as votos cadastradas.
*       500: 
*         description: Retorna um possivel erro ao executar a operação
*/
router.get('/all',       auth.authorized, controller.all)

/** 
* @swagger
* /vote/show:
*   get:
*     tags: [Vote]
*     parameters:
*      -  name: x-access-token
*         in: header
*         description: Token do usuário autenticado
*         required: true
*      -  name: id
*         in: query
*         required: true
*         description: Id do voto
*     summary: Exibe informações de um voto pelo id
*     responses:
*       200:
*         description: Retorna um objeto com uma voto especifica
*       500: 
*         description: Retorna um possivel erro ao executar a operação
*/
router.get('/show',      auth.authorized, controller.show)

/** 
* @swagger
* /vote/add:
*   post:
*     tags: [Vote]
*     parameters:
*      -  name: x-access-token
*         in: header
*         description: Token do usuário autenticado
*         required: true
*     summary: Cadastro de uma novo voto
*     requestBody:
*         required: true
*         content:
*           application/json:
*             schema: 
*               type: object
*               properties:
*                 user_id:      
*                   type: integer
*                 card_id:      
*                   type: integer
*                 history_id:      
*                   type: integer
*     responses:
*       200:
*         description: Retorna um objeto com a voto cadastrado.
*       500: 
*         description: Retorna um possivel erro ao executar a operação
*/
router.post('/add',      auth.authorized, controller.add)

/** 
* @swagger
* /vote/update:
*   put:
*     tags: [Vote]
*     parameters:
*      -  name: x-access-token
*         in: header
*         description: Token do usuário autenticado
*         required: true
*      -  name: id
*         in: query
*         required: true
*         description: Id do voto
*     summary: Atualiza as informações de um voto específico
*     requestBody:
*         required: true
*         content:
*           application/json:
*             schema: 
*               type: object
*               properties:
*                 user_id:      
*                   type: integer
*                 card_id:      
*                   type: integer
*                 history_id:      
*                   type: integer
*     responses:
*       200:
*         description: Retorna um objeto com a voto atualizado.
*       500: 
*         description: Retorna um possivel erro ao executar a operação
*/
router.put('/update',    auth.authorized, controller.update)

/** 
* @swagger
* /vote/delete:
*   delete:
*     tags: [Vote]
*     parameters:
*      -  name: x-access-token
*         in: header
*         description: Token do usuário autenticado
*         required: true
*      -  name: id
*         in: query
*         required: true
*         description: Id do voto
*     summary: Remove uma voto do Banco de Dados
*     responses:
*       200:
*         description: Retorna o status da transação.
*       500: 
*         description: Retorna um possivel erro ao executar a operação
*/
router.delete('/delete', auth.authorized, controller.delete)

module.exports = router