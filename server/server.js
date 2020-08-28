const express = require('express')
const cors = require('cors')

const apiRouter = require('./routes/api')

// Create Express server
const server = express()

// Configure server
server.use(express.json())
server.use(cors())
server.use('/api/v1', apiRouter)

module.exports = server
