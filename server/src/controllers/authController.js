const {
  AllProducts, NewProduct, ProductById, deleteProduct, updateProduct,
} = require('../models/productModel')

const signIn = async (_req, res) => {
}
const signUp = async (req, res) => {
}
const signOut = async (req, res) => {
}
const refreshToken = async (req, res) => {
}

module.exports.authController = {
  signIn, signUp, signOut, refreshToken,
}
