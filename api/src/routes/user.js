'use strict'

const express = require('express')
const router = express.Router()

const controller = require('../controllers/user')
const auth = require('../packages/auth')

/** 
* @swagger
* tags:
*   name: User  
*   description: Cadastro de Cartas.
*/

/** 
* @swagger
* /user/all:
*   get:
*     tags: [User]
*     summary: Welcome to swagger-jsdoc!
*     responses:
*       200:
*         description: Returns a mysterious string.
*/
router.get('/all',       auth.authorized, controller.all)

/** 
* @swagger
* /user/show:
*   get:
*     tags: [User]
*     summary: Welcome to swagger-jsdoc!
*     responses:
*       200:
*         description: Returns a mysterious string.
*/
router.get('/show',      auth.authorized, controller.show)

/** 
* @swagger
* /user/add:
*   post:
*     tags: [User]
*     summary: Welcome to swagger-jsdoc!
*     responses:
*       200:
*         description: Returns a mysterious string.
*/
router.post('/add',      auth.authorized, controller.add)

/** 
* @swagger
* /user/search:
*   post:
*     tags: [User]
*     summary: Welcome to swagger-jsdoc!
*     responses:
*       200:
*         description: Returns a mysterious string.
*/
router.post('/search',   auth.authorized, controller.search)

/** 
* @swagger
* /user/update:
*   put:
*     tags: [User]
*     summary: Welcome to swagger-jsdoc!
*     responses:
*       200:
*         description: Returns a mysterious string.
*/
router.put('/update',    auth.authorized, controller.update)

/** 
* @swagger
* /user/delete:
*   delete:
*     tags: [User]
*     summary: Welcome to swagger-jsdoc!
*     responses:
*       200:
*         description: Returns a mysterious string.
*/
router.delete('/delete', auth.authorized, controller.delete)

module.exports = router