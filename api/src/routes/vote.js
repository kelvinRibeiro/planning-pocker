'use strict'

const express = require('express')
const router = express.Router()

const controller = require('../controllers/vote')
const auth = require('../packages/auth')

/** 
* @swagger
* tags:
*   name: Vote  
*   description: Cadastro de Cartas.
*/

/** 
* @swagger
* /vote/all:
*   get:
*     tags: [Vote]
*     summary: Welcome to swagger-jsdoc!
*     responses:
*       200:
*         description: Returns a mysterious string.
*/
router.get('/all',       auth.authorized, controller.all)

/** 
* @swagger
* /vote/show:
*   get:
*     tags: [Vote]
*     summary: Welcome to swagger-jsdoc!
*     responses:
*       200:
*         description: Returns a mysterious string.
*/
router.get('/show',      auth.authorized, controller.show)

/** 
* @swagger
* /vote/add:
*   post:
*     tags: [Vote]
*     summary: Welcome to swagger-jsdoc!
*     responses:
*       200:
*         description: Returns a mysterious string.
*/
router.post('/add',      auth.authorized, controller.add)

/** 
* @swagger
* /vote/update:
*   put:
*     tags: [Vote]
*     summary: Welcome to swagger-jsdoc!
*     responses:
*       200:
*         description: Returns a mysterious string.
*/
router.put('/update',    auth.authorized, controller.update)

/** 
* @swagger
* /vote/delete:
*   delete:
*     tags: [Vote]
*     summary: Welcome to swagger-jsdoc!
*     responses:
*       200:
*         description: Returns a mysterious string.
*/
router.delete('/delete', auth.authorized, controller.delete)

module.exports = router