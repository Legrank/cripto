const express = require('express')
const router = express.Router({ mergeParams: true })
const auth = require('../middleware/auth')
const Collection = require('../models/Collection')
const CollectionDTO = require('../dto/CollectionDTO')
router.post('/create', auth, async (req, res) => {
  try {
    const { name } = req.body
    const userid = req.user._id
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.')
    }
    const { bgImg } = req.files
    const collection = await Collection.create({ name })
    const fileName = bgImg.name.split('.')
    const type = fileName[fileName.length - 1]
    const pathImg = 'img/' + userid + collection._id + '.' + type
    const path = __dirname + '/../public/' + pathImg
    collection.bgImg = pathImg
    await collection.save()
    bgImg.mv(path)

    res.status(201).json(new CollectionDTO(collection))
  } catch (e) {
    console.log(e)
    res.status(500).json({ message: 'На сервере произошла ошибка' })
  }
})
router.post('/addcover', auth, async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.')
  }
  req.files.file.mv(
    __dirname + '/temp/img' + Math.random().toString().slice(2, 7) + '.png'
  )

  try {
    res.json({ message: 'Работает' })
  } catch (e) {
    console.log(e)
    res.status(500).json({ message: 'На сервере произошла ошибка' })
  }
})
router.post('/:collectionID', auth, async (req, res) => {
  const { collectionID } = req.params
  try {
    console.log(collectionID)

    res.json({ message: 'work' })
  } catch (e) {
    console.log(e)
    res.status(500).json({ message: 'На сервере произошла ошибка' })
  }
})

module.exports = router
