const UserModel = require('../models/User')
const userMock = require('../mock/users.json')

module.exports = async () => {
  const users = await UserModel.find()
  if (!users.length) {
    await createEntity(UserModel, userMock)
  }
}

async function createEntity(Model, data) {
  return Promise.all(
    data.map(async (item) => {
      try {
        const newItem = new Model(item)
        await newItem.save()
      } catch (error) {
        console.log(error.message)
      }
    })
  )
}
