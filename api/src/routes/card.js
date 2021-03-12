'use strict'

const express = require('express')
const router = express.Router()

const controller = require('../controllers/card')
const auth = require('../packages/auth')

/** 
* @swagger
* tags:
*   name: Card  
*   description: Cadastro de Cartas.
*/

/** 
* @swagger
* /card/all:
*   get:
*     tags: [Card]
*     parameters:
*      -  name: x-access-token
*         in: header
*         description: Token do Usuário autenticado
*         required: true
*     summary: Listagem de cartas
*     responses:
*       200:
*         description: Retorna um array de objetos contendo as cartas cadastradas.
*       500: 
*         description: Retorna um possivel erro ao executar a operação
*/
router.get('/all',       auth.authorized, controller.all)

/** 
* @swagger
* /card/show:
*   get:
*     tags: [Card]
*     parameters:
*      -  name: x-access-token
*         in: header
*         description: Token do Usuário autenticado
*         required: true
*      -  name: id
*         in: query
*         required: true
*         description: Id da carta
*     summary: Exibe informações de uma carta pelo id
*     responses:
*       200:
*         description: Retorna um objeto com uma carta especifica
*       500: 
*         description: Retorna um possivel erro ao executar a operação
*/
router.get('/show',      auth.authorized, controller.show)

/** 
* @swagger
* /card/add:
*   post:
*     tags: [Card]
*     parameters:
*      -  name: x-access-token
*         in: header
*         description: Token do Usuário autenticado
*         required: true
*     summary: Cadastro de uma nova carta
*     requestBody:
*         required: true
*         content:
*           application/json:
*             schema: 
*               type: object
*               properties:
*                 value:      
*                   type: string
*     responses:
*       200:
*         description: Retorna um objeto com a carta cadastrada.
*       500: 
*         description: Retorna um possivel erro ao executar a operação
*/
router.post('/add',      auth.authorized, controller.add)

/** 
* @swagger
* /card/search:
*   post:
*     tags: [Card]
*     parameters:
*      -  name: x-access-token
*         in: header
*         description: Token do Usuário autenticado
*         required: true
*     summary: Busca uma carta
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
*         description: Retorna um objeto com a carta encontrada na busca.
*       500: 
*         description: Retorna um possivel erro ao executar a operação
*/
router.post('/search',   auth.authorized, controller.search)

/** 
* @swagger
* /card/update:
*   put:
*     tags: [Card]
*     parameters:
*      -  name: x-access-token
*         in: header
*         description: Token do Usuário autenticado
*         required: true
*      -  name: id
*         in: query
*         required: true
*         description: Id da carta
*     summary: Atualiza as informações de uma carta específica
*     requestBody:
*         required: true
*         content:
*           application/json:
*             schema: 
*               type: object
*               properties:
*                 value:      
*                   type: string
*     responses:
*       200:
*         description: Retorna um objeto com a carta atualizada.
*       500: 
*         description: Retorna um possivel erro ao executar a operação
*/
router.put('/update',    auth.authorized, controller.update)

/** 
* @swagger
* /card/delete:
*   delete:
*     tags: [Card]
*     parameters:
*      -  name: x-access-token
*         in: header
*         description: Token do Usuário autenticado
*         required: true
*      -  name: id
*         in: query
*         required: true
*         description: Id da carta
*     summary: Remove uma carta do Banco de Dados
*     responses:
*       200:
*         description: Retorna o status da transação.
*       500: 
*         description: Retorna um possivel erro ao executar a operação
*/
router.delete('/delete', auth.authorized, controller.delete)

module.exports = router