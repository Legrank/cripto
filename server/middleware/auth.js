const tokenService = require('../services/token.service')

module.exports = (req, res, next) => {
  if (req.method === 'OPTION') {
    return next()
  }
  try {
    const token = req.headers.authorization?.split(' ')[1]
    console.log('token', token)
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' })
    }
    const user = tokenService.validateAccess(token)
    req.user = user
    next()
  } catch (error) {
    console.log(error)
    return res.status(401).json({ message: 'Unauthorized' })
  }
}
