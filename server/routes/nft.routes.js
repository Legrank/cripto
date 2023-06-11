const express = require('express')
const p = require('path')
const router = express.Router({ mergeParams: true })
const auth = require('../middleware/auth')
const Nft = require('../models/Nft')
const Collection = require('../models/Collection')
const NftDTO = require('../dto/NftDTO')
router.post('/create', auth, async (req, res) => {
  try {
    const { name, description, price, collectionNft } = req.body
    const userid = req.user._id
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.')
    }
    const { imgUrl } = req.files
    const nft = await Nft.create({
      name,
      description,
      price,
      collectionNft,
      owner: userid,
      creator: userid,
    })
    const fileName = imgUrl.name.split('.')
    const type = fileName[fileName.length - 1]
    const pathImg = 'nft/' + userid + nft._id + '.' + type
    const path = p.join(__dirname, '..', 'public', pathImg)
    nft.imgUrl = pathImg
    await nft.save()
    const collection = await Collection.findById(collectionNft)
    collection.nft.push(nft._id)
    await collection.save()
    imgUrl.mv(path)
    res.status(201).json(new NftDTO(nft))
  } catch (e) {
    console.log(e)
    res.status(500).json({ message: 'На сервере произошла ошибка' })
  }
})
router.post('/update', auth, async (req, res) => {
  try {
    const { name, description, price, collectionNft, id, owner, creator } =
      req.body
    const userid = req.user._id
    if (userid !== creator) {
      return res.status(401).json({ message: 'Недостаточно прав' })
    }
    const nft = await Nft.findByIdAndUpdate(
      id,
      {
        name,
        description,
        price,
        collectionNft,
        owner,
      },
      { new: true }
    )
    if (req.files && Object.keys(req.files).length !== 0) {
      const { imgUrl } = req.files
      const fileName = imgUrl.name.split('.')
      const type = fileName[fileName.length - 1]
      const pathImg = 'nft/' + userid + nft._id + '.' + type
      const path = p.join(__dirname, '..', 'public', pathImg)
      nft.imgUrl = pathImg
      await nft.save()
      imgUrl.mv(path)
    }

    res.json(new NftDTO(nft))
  } catch (e) {
    console.log(e)
    res.status(500).json({ message: 'На сервере произошла ошибка' })
  }
})
router.delete('/:id', auth, async (req, res) => {
  try {
    const user = req.user?._id
    const { id } = req.params
    const nft = await Nft.findByIdAndDelete(id)
    const collection = await Collection.findById(nft.collectionNft)
    const nfts = collection.nft
    const filt = nfts.filter((nft) => nft.toString() !== id)
    collection.nft = filt
    await collection.save()
    res.json(new NftDTO(nft))
  } catch (e) {
    console.log(e)
    res.status(500).json({ message: 'На сервере произошла ошибка' })
  }
})
router.post('/nftbyids', async (req, res) => {
  try {
    const nftIds = req.body
    const nfts = await Promise.all(
      nftIds.map(async (nftId) => await Nft.findById(nftId))
    )
    res.json(nfts.map((nft) => new NftDTO(nft)))
  } catch (e) {
    console.log(e)
    res.status(500).json({ message: 'На сервере произошла ошибка' })
  }
})

module.exports = router
