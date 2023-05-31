const express = require('express')
const bcrypt = require('bcryptjs')

const User = require('../models/User')
const tokenService = require('../services/token.service')
const router = express.Router({ mergeParams: true })

router.post('/singUp', async (req, res) => {
  try {
    const { email, password } = req.body
    const exitinUser = await User.findOne({ email })
    if (exitinUser) {
      return res
        .status(400)
        .json({ message: 'Пользователь с такие email существует' })
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = await User.create({
      ...req.body,
      password: hashedPassword,
    })
    const tokens = tokenService.generete({ _id: newUser._id })
    await tokenService.save(newUser._id, tokens.refreshToken)
    res.status(201).json({ ...tokens, userId: newUser._id })
  } catch (e) {
    console.log(e)

    res.status(500).json({ message: 'На сервере произошла ошибка' })
  }
})
router.post('/singInWithPassword', async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(400).json({ message: 'Пользователя не существует' })
    }
    const isEqual = await bcrypt.compare(password, user.password)
    if (!isEqual) {
      return res.status(400).json({ message: 'Пароль не верный' })
    }
    const tokens = tokenService.generete({ _id: user._id })
    await tokenService.save(user._id, tokens.refreshToken)
    res.json({ ...tokens, userId: user._id })
  } catch (e) {
    console.log(e)

    res.status(500).json({ message: 'На сервере произошла ошибка' })
  }
})
router.post('/token', async (req, res) => {
  const { refreshToken } = req.body
  const validToken = tokenService.validateRefresh(refreshToken)
  const dbToken = await tokenService.findToken(refreshToken)
  if (isTokenInvalid(validToken, dbToken)) {
    return res.status(400).json({ message: 'Токен невалидный' })
  }
  const tokens = tokenService.generete({ _id: validToken._id })
  await tokenService.save(validToken._id, tokens.refreshToken)
  res.json({ ...tokens, userId: validToken._id })
})

function isTokenInvalid(token, dbToken) {
  return !token || !dbToken || token._id !== dbToken?.userId?.toString()
}
module.exports = router
