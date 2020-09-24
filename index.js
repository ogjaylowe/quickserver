// import express
var express = require('express')

// use framework 
var server = express()

// make a route
server.get('/', (request, response) => {
  response.send('splashpage index.js')
})

server.get('/route2', (request, response) => {
  response.send('route 2 message!')
})

server.listen(5000)