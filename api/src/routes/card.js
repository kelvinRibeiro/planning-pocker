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
*     summary: Welcome to swagger-jsdoc!
*     responses:
*       200:
*         description: Returns a mysterious string.
*/
router.get('/all',       auth.authorized, controller.all)

/** 
* @swagger
* /card/show:
*   get:
*     tags: [Card]
*     summary: Welcome to swagger-jsdoc!
*     responses:
*       200:
*         description: Returns a mysterious string.
*/
router.get('/show',      auth.authorized, controller.show)

/** 
* @swagger
* /card/add:
*   post:
*     tags: [Card]
*     summary: Welcome to swagger-jsdoc!
*     responses:
*       200:
*         description: Returns a mysterious string.
*/
router.post('/add',      auth.authorized, controller.add)

/** 
* @swagger
* /card/search:
*   post:
*     tags: [Card]
*     summary: Welcome to swagger-jsdoc!
*     responses:
*       200:
*         description: Returns a mysterious string.
*/
router.post('/search',   auth.authorized, controller.search)

/** 
* @swagger
* /card/update:
*   put:
*     tags: [Card]
*     summary: Welcome to swagger-jsdoc!
*     responses:
*       200:
*         description: Returns a mysterious string.
*/
router.put('/update',    auth.authorized, controller.update)

/** 
* @swagger
* /card/delete:
*   delete:
*     tags: [Card]
*     summary: Welcome to swagger-jsdoc!
*     responses:
*       200:
*         description: Returns a mysterious string.
*/
router.delete('/delete', auth.authorized, controller.delete)

module.exports = router