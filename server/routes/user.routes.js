const express = require('express')

const User = require('../models/User')
const noAuthAddUser = require('../middleware/noAuthAddUser')
const UserDTO = require('../dto/UserDTO')
const router = express.Router({ mergeParams: true })

function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

router.get('/one/:userId', noAuthAddUser, async (req, res) => {
  const userId = req.params.userId
  try {
    const user = await User.findById(userId)
    const currentUserId = req.user._id
    const userDTO = new UserDTO(user, currentUserId)
    res.json(userDTO)
  } catch (e) {
    console.log(e)

    res.status(500).json({ message: 'not work' })
  }
})

router.get('/totalsale', noAuthAddUser, async (req, res) => {
  try {
    // await User.find()).forEach(async (user) => {
    //   user.totalsale = getRandomInt(3000)
    //   user.balance = getRandomInt(1500)
    //   await user.save()
    // }
    const users = await User.find().sort({ totalsale: -1 }).limit(4)
    const currentUserId = req.user ? req.user._id : null
    const userDTO = users.map((user) => new UserDTO(user, currentUserId))
    res.json(userDTO)
  } catch (e) {
    console.log(e)

    res.status(500).json({ message: 'not work' })
  }
})

module.exports = router
