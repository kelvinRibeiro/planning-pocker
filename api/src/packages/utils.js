const utils   = {}

const express = require('express')
const app     = express()
const http    = require('http')

const server = http.createServer(app)
const io     = require('socket.io').listen(server)

socket_port = 2009
server.listen(socket_port)

utils.callback = (res, response, event) => {
 
  if(event)
    io.emit(event, response.data)
  
  res.json(response)
}

utils.socket = (event, data) => {
  io.emit(event, data)
}

utils.response = (err, data) => {
  return { 
    success: err ? false : true, 
    message: err ? err.toString() : 'Operation success', 
    data:    data ? data: null
  }
}

module.exports = utils
