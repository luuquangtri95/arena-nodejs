const ResponseHandler = require('../helpers/responseHandler')
const multer = require('multer')
const Service = require('./../services/product')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  },
})

const uploadImg = multer({ storage: storage }).array('image', 8)

const getAll = async (req, res) => {
  try {
    const result = await Service.findAll()
    return ResponseHandler.success(res, result)
  } catch (error) {
    return ResponseHandler.error(res, error)
  }
}
const getById = async (req, res) => {}
const create = async (req, res) => {
  try {
    const newData = {
      title: req.body.title,
      images: req.files.map((x, index) => ({ [`image${index + 1}`]: x.path })),
      description: req.body.description,
      price: req.body.price,
    }

    const result = await Service.create(newData)
    return ResponseHandler.success(res, result)
  } catch (error) {
    return ResponseHandler.error(res, error)
  }
}
const update = async (req, res) => {}
const _delete = async (req, res) => {}

module.exports = {
  getAll,
  getById,
  create,
  update,
  _delete,
  uploadImg,
}
