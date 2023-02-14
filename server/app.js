require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { clientSideRouter } = require('./src/routes/clientSideRouter')
const { adminSideRouter } = require('./src/routes/adminSideRouter')

const server = express()
const PORT = process.env.SERVER_PORT

server.use(cors())
server.use(express.json())
// Роут сайта клиента
server.use('/api/v0.1/products', clientSideRouter)
// Роут админки
server.use('/api/v0.1/admin', adminSideRouter)

server.listen(PORT, () => {
  console.log(`Server has been started on port: ${PORT}`)
})
