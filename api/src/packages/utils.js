const utils   = {}

const express = require('express')
const app     = express()
const http    = require('http')

const amqp = require('amqplib/callback_api')

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

utils.sendExchange = (exchange, data, msg) => {
 
  amqp.connect('amqps://yxtlhxyy:2wEniN_o6i2OYp82cvTRPSlOc3Hpqv6_@jackal.rmq.cloudamqp.com/yxtlhxyy', (error0, connection) => {
    if (error0)
      throw error0
    
    connection.createChannel( (error1, channel) => {

      if (error1) 
        throw error1

      channel.publish(exchange,'AllVotes', Buffer.from(msg));
      console.log("Mensagem : ", msg);
    })

    setTimeout(() => {
      connection.close()
      process.exit(0)
      }, 500)
  })
}

module.exports = utils
