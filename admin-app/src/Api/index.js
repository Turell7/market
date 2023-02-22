import axios from 'axios'
import { getUserToken } from '../tools/utils'

class Api {
  constructor(path) {
    this.path = path
    this.headers = { 'Content-Type': 'application/json' }
    this.token = getUserToken()
    this.authInstance = this.token ? axios.create({
      headers: {
        authorization: `Bearer ${this.token}`,
        'Content-Type': 'application/json',
      },
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
      baseURL: this.path,
    }) : null
  }

  getAllProducts() {
    return this.authInstance.get('/products')
  }

  getProductById(id) {
    return this.authInstance(`/products/${id}`)
  }

  signUp(signUpData) {
    return axios.post(`${this.path}/signup`, signUpData)
  }

  signIn(signInData) {
    return axios.post(`${this.path}/signin`, signInData)
  }

  createProduct(productData) {
    return this.authInstance.post('/products', JSON.stringify(productData))
  }
}

const api = new Api('http://localhost:3050/api/v0.1/client')
const adminApi = new Api('http://localhost:3050/api/v0.1/admin')

export {
  api,
  adminApi,
}
