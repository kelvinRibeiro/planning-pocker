'use strict'

const express = require('express')
const router = express.Router()

const controller = require('../controllers/history')
const auth = require('../packages/auth')

/** 
* @swagger
* tags:
*   name: History  
*   description: Cadastro de Cartas.
*/

/** 
* @swagger
* /history/all:
*   get:
*     tags: [History]
*     summary: Welcome to swagger-jsdoc!
*     responses:
*       200:
*         description: Returns a mysterious string.
*/
router.get('/all',       auth.authorized, controller.all)

/** 
* @swagger
* /history/show:
*   get:
*     tags: [History]
*     summary: Welcome to swagger-jsdoc!
*     responses:
*       200:
*         description: Returns a mysterious string.
*/
router.get('/show',      auth.authorized, controller.show)

/** 
* @swagger
* /history/add:
*   post:
*     tags: [History]
*     summary: Welcome to swagger-jsdoc!
*     responses:
*       200:
*         description: Returns a mysterious string.
*/
router.post('/add',      auth.authorized, controller.add)

/** 
* @swagger
* /history/search:
*   post:
*     tags: [History]
*     summary: Welcome to swagger-jsdoc!
*     responses:
*       200:
*         description: Returns a mysterious string.
*/
router.post('/search',   auth.authorized, controller.search)

/** 
* @swagger
* /history/update:
*   put:
*     tags: [History]
*     summary: Welcome to swagger-jsdoc!
*     responses:
*       200:
*         description: Returns a mysterious string.
*/
router.put('/update',    auth.authorized, controller.update)

/** 
* @swagger
* /history/delete:
*   delete:
*     tags: [History]
*     summary: Welcome to swagger-jsdoc!
*     responses:
*       200:
*         description: Returns a mysterious string.
*/
router.delete('/delete', auth.authorized, controller.delete)

module.exports = router