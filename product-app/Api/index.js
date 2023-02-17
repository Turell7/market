import axios from 'axios'
// import { token } from '../src/tools/utils'


class Api {
  constructor(path) {
    this.path = path
    this.headers = { 'Content-Type': 'application/json' }
    // this.token = token
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

  signUp(name, password, email) {
    const res = axios.post(`${this.path}/signUp`,
      {
        name,
        password,
        email,
      }
  )
    return res
  }

  signIn(email, password) {
    const res = axios.post(`${this.path}/signIn`, {
      email,
      password,
    })
    return res
  }

  getAllProducts() {
    return this.authInstance.get('/products')
  }

  getProductById(id) {
    return this.authInstance(`/products/${id}`)
  }

  createProduct(productData) {
    return this.authInstance.post('/products', JSON.stringify(productData))
  }
}

const api = new Api('http://localhost:3050/api/v0.1')
const adminApi = new Api('http://localhost:3050/api/v0.1/admin')

export {
  api,
  adminApi,
}