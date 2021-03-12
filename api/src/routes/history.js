'use strict'

const express = require('express')
const router = express.Router()

const controller = require('../controllers/history')
const auth = require('../packages/auth')

/** 
* @swagger
* tags:
*   name: History  
*   description: Cadastro de Histórias de Usuário.
*/

/** 
* @swagger
* /history/all:
*   get:
*     tags: [History]
*     parameters:
*      -  name: x-access-token
*         in: header
*         description: Token do Usuário autenticado
*         required: true
*     summary: Listagem de histórias
*     responses:
*       200:
*         description: Retorna um array de objetos contendo as histórias cadastradas.
*       500: 
*         description: Retorna um possivel erro ao executar a operação
*/
router.get('/all',       auth.authorized, controller.all)

/** 
* @swagger
* /history/show:
*   get:
*     tags: [History]
*     parameters:
*      -  name: x-access-token
*         in: header
*         description: Token do Usuário autenticado
*         required: true
*      -  name: id
*         in: query
*         required: true
*         description: Id da história
*     summary: Exibe informações de uma história pelo id
*     responses:
*       200:
*         description: Retorna um objeto com uma história especifica
*       500: 
*         description: Retorna um possivel erro ao executar a operação
*/
router.get('/show',      auth.authorized, controller.show)

/** 
* @swagger
* /history/add:
*   post:
*     tags: [History]
*     parameters:
*      -  name: x-access-token
*         in: header
*         description: Token do Usuário autenticado
*         required: true
*     summary: Cadastro de uma nova história
*     requestBody:
*         required: true
*         content:
*           application/json:
*             schema: 
*               type: object
*               properties:
*                 description:      
*                   type: string
*     responses:
*       200:
*         description: Retorna um objeto com a história cadastrada.
*       500: 
*         description: Retorna um possivel erro ao executar a operação
*/
router.post('/add',      auth.authorized, controller.add)

/** 
* @swagger
* /history/search:
*   post:
*     tags: [History]
*     parameters:
*      -  name: x-access-token
*         in: header
*         description: Token do Usuário autenticado
*         required: true
*     summary: Busca uma história
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
*         description: Retorna um objeto com a história encontrada na busca.
*       500: 
*         description: Retorna um possivel erro ao executar a operação
*/
router.post('/search',   auth.authorized, controller.search)

/** 
* @swagger
* /history/update:
*   put:
*     tags: [History]
*     parameters:
*      -  name: x-access-token
*         in: header
*         description: Token do Usuário autenticado
*         required: true
*      -  name: id
*         in: query
*         required: true
*         description: Id da história
*     summary: Atualiza as informações de uma história específica
*     requestBody:
*         required: true
*         content:
*           application/json:
*             schema: 
*               type: object
*               properties:
*                 description:      
*                   type: string
*     responses:
*       200:
*         description: Retorna um objeto com a história atualizada.
*       500: 
*         description: Retorna um possivel erro ao executar a operação
*/
router.put('/update',    auth.authorized, controller.update)

/** 
* @swagger
* /history/delete:
*   delete:
*     tags: [History]
*     parameters:
*      -  name: x-access-token
*         in: header
*         description: Token do Usuário autenticado
*         required: true
*      -  name: id
*         in: query
*         required: true
*         description: Id da história
*     summary: Remove uma história do Banco de Dados
*     responses:
*       200:
*         description: Retorna o status da transação.
*       500: 
*         description: Retorna um possivel erro ao executar a operação
*/
router.delete('/delete', auth.authorized, controller.delete)

module.exports = router