const db = require('../models')

const findAll = async () => {
  try {
    return await db.Product.findAll()
  } catch (error) {
    throw error
  }
}
const findById = async (id) => {}
const create = async (data) => {
  try {
    await db.Product.create({
      title: data.title,
      image: data.image,
      description: data.description,
      price: data.price,
    })
  } catch (error) {
    throw error
  }
}
const update = async (data) => {}
const _delete = async (id) => {}

module.exports = {
  findAll,
  findById,
  create,
  update,
  _delete,
}
