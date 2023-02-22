const { ImageModel } = require('../models/imageModel')

const deleteImageById = async (req, res) => {
  try {
    const { id } = req.params
    const resFromDB = await ImageModel.destroy({
      where: {
        id: [id],
      },
    })
    if (resFromDB === 0) {
      console.log(resFromDB)
      res
        .status(400)
        .json('Картинка не найден')
      return
    }
    console.log(resFromDB)
    res
      .status(200)
      .json('Картинка успешно удалена')
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}

module.exports = {
  deleteImageById,
}
