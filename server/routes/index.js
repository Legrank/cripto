const express = require('express')

const routes = express.Router({ mergeParams: true })
routes.use('/auth', require('./auth.routes'))

module.exports = routes
