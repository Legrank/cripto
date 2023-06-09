const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const chalk = require('chalk')
const cors = require('cors')
const path = require('path')
const fileUpload = require('express-fileupload')
const initDatabase = require('./startUp/initDatabase')
const routes = require('./routes')

const app = express()

const PORT = config.get('PORT') ?? 8080
app.use(express.json())
app.use(express.urlencoded({ extends: false }))
app.use(cors())
app.use(fileUpload())
app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/api', routes)
if (process.env.NODE_ENV === 'production') {
  const indexPath = path.join(__dirname, 'public', 'index.html')
  app.get('*', (req, res) => {
    res.sendFile(indexPath)
  })
}
async function start() {
  try {
    mongoose.connection.once('open', () => {
      initDatabase()
    })
    await mongoose.connect(config.get('DB_URL'))
    console.log(chalk.green('MongoDB connect'))

    app.listen(PORT, () =>
      console.log(chalk.green(`Сервер запущен на порту ${PORT}`))
    )
  } catch (error) {
    console.log(error.message)
    process.exit(1)
  }
}
start()
