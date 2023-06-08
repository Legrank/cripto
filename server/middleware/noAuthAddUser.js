const tokenService = require('../services/token.service')

module.exports = (req, res, next) => {
  if (req.method === 'OPTION') {
    return next()
  }
  try {
    if (!req.headers.authorization) {
      return next()
    }
    const token = req.headers.authorization?.split(' ')[1]
    if (!token) {
      return next()
    }
    const user = tokenService.validateAccess(token)
    req.user = user
    next()
  } catch (error) {
    console.log(error)
    return res.status(401).json({ message: 'Unauthorized' })
  }
}
