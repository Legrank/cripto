const express = require('express')
const auth = require('../middleware/auth')

const routes = express.Router({ mergeParams: true })
routes.use('/auth', require('./auth.routes'))
routes.use('/collection', require('./collection.routs'))

module.exports = routes
