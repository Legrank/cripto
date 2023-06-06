const express = require('express')
const router = express.Router({ mergeParams: true })

router.post('/', async (req, res) => {
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

module.exports = router
