import axios from 'axios'

class Api {
  constructor() {
    this.path = 'http://localhost:3050/api/v0.1'
  }

  getAllProducts() {
    return axios.get(`${this.path}/products`)
  }

  getProductById(id) {
    return axios.get(`${this.path}/products/${id}`)
  }

  createProduct(productData) {
    return axios.post(`${this.path}/products`, JSON.stringify(productData))
  }
}

const api = new Api()

export {
  api,
}
