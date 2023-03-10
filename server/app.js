require('dotenv').config()
const express = require('express')
const cors = require('cors')
const multer = require('multer')
// const path = require('path')
const { clientSideRouter } = require('./src/routes/clientSideRouter')
const { adminSideRouter } = require('./src/routes/adminSideRouter')
const { sequelize } = require('./src/models/index')
const { storageImages } = require('./src/middlewares/uploadFiles')

const server = express()
const PORT = process.env.SERVER_PORT

const upload = multer({ storage: storageImages })

server.use(cors())
// sequelize.sync({ force: true })
sequelize.sync({ alter: true })
  .then(() => {
    console.log('The DB has been succesfuly synced')
  })
  .catch((err) => {
    console.log(`Failed to sync DB: ${err.message}`)
  })

server.use(express.json())
// Роут сайта клиента
server.use('/api/v0.1/client', clientSideRouter)
// Роут админки
server.use('/api/v0.1/admin', adminSideRouter)

server.post('/upload/images', upload.single('image'), (req, res) => {
  // res.send('Image Uploaded')
  // console.log(req)

  try {
    if (req.file) {
      res.json(req.file)
    }
  } catch (error) {
    console.log(error)
  }
})

server.listen(PORT, () => {
  console.log(`Server has been started on port: ${PORT}`)
})
