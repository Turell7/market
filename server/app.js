const express = require('express')
const { productsRouter, adminRouter } = require('./src/routes/productsRouter')

const server = express()
const PORT = 3050

server.use(express.json())
server.use('/api/v0.1/products', productsRouter)
// server.use('/api/v0.1/admin', adminRouter)

server.listen(PORT, () => {
  console.log(`Server has been started on port: ${PORT}`)
})
