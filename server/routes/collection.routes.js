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
    const collection = await Collection.create({
      name,
      owner: userid,
      creator: userid,
    })
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
router.get('/mycollection', auth, async (req, res) => {
  try {
    const userid = req.user._id
    const collection = await Collection.find({ owner: userid })
    res.json(collection.map((item) => new CollectionDTO(item)))
  } catch (e) {
    console.log(e)
    res.status(500).json({ message: 'На сервере произошла ошибка' })
  }
})
router.get('/collection', async (req, res) => {
  try {
    const { limit } = req.query
    const collection = await Collection.find().limit(limit)
    res.json(collection.map((item) => new CollectionDTO(item)))
  } catch (e) {
    console.log(e)
    res.status(500).json({ message: 'На сервере произошла ошибка' })
  }
})
router.get('/:collectionID', async (req, res) => {
  const { collectionID } = req.params
  try {
    const collection = await Collection.findById(collectionID)
    res.json(new CollectionDTO(collection))
  } catch (e) {
    console.log(e)
    res.status(500).json({ message: 'На сервере произошла ошибка' })
  }
})

module.exports = router
