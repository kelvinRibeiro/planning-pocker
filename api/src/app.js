'use strict'

// Constants
const express = require('express')
const app = express()

const cors = require('cors')

// DDOS
const Ddos = require('ddos')

const ddos = new Ddos({ burst: 20, limit: 15 })
app.use(ddos.express)

// Helmet
app.use(require('helmet')())

// Json
app.use(express.json())

// Cors
app.use(cors({ origin: '*'}))

const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi    = require('swagger-ui-express')

const path = require('path')

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Planning Pocker API',
      version: '1.0.0',
      description: 'API desenvolvida para o teste da empresa Concert'
    },
    servers: [
      { url: 'http://localhost:3009' } 
    ]
  },
  apis: [`${ path.resolve() }/src/routes/*.js`]
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
// Routes
const index 			 = require('./routes/index')
const auth 				 = require('./routes/auth')
const user 				 = require('./routes/user')
const card 				 = require('./routes/card')
const history 		 = require('./routes/history')
const vote 				 = require('./routes/vote')

// Define routes
app.use('/',        index)

app.use('/auth',    auth)
app.use('/user',    user)
app.use('/card',    card)
app.use('/history', history)
app.use('/vote',    vote)

// Route 404
app.use((req, res, next) => res.status(404).send('Route not found!'))

// Export
module.exports = app
