const jwt = require('jsonwebtoken')
const config = require('config')
const Token = require('../models/Token')

class TokenService {
  generete(payload) {
    return {
      accessToken: jwt.sign(payload, config.get('accessSecret'), {
        expiresIn: '1h',
      }),
      refreshToken: jwt.sign(payload, config.get('refreshSecret')),
      exporesIn: 3600,
    }
  }
  async save(userId, refreshToken) {
    const data = await Token.findOne({ userId })
    if (data) {
      data.refreshToken = refreshToken
      return data.save()
    }
    return await Token.create({ userId, refreshToken })
  }
  _validate(token, type) {
    const secret =
      type === 'refresh'
        ? config.get('refreshSecret')
        : config.get('accessSecret')
    return jwt.verify(token, secret)
  }
  validateRefresh(refreshToken) {
    return this._validate(refreshToken, 'refresh')
  }
  validateAccess(accessToken) {
    return this._validate(accessToken, 'access')
  }
  async findToken(refreshToken) {
    try {
      return await Token.findOne({ refreshToken })
    } catch (error) {
      return null
    }
  }
}

module.exports = new TokenService()
