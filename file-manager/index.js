const express = require('express')
const cors = require('cors')

const PORT = 8000
const app = express()

app.use(cors())
require('./routes')(app)

app.listen(PORT, () => {
  console.log(`Server has been started on port: ${PORT}`)
})
