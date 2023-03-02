const multer = require('multer')

const storageImages = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/storage/images')
  },
  filename: (req, file, cb) => {
    console.log(file)
    cb(null, `${Date.now()}_${file.originalname}`)
    // cb(null, Date.now() + path.extname(file.originalname))
  },
})

module.exports = { storageImages }
