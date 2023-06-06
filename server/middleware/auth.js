const tokenService = require('../services/token.service')

module.exports = (req, res, next) => {
  console.log('worck')

  if (req.method === 'OPTION') {
    return next()
  }
  try {
    const token = req.headers.authorization.split(' ')[1]
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
