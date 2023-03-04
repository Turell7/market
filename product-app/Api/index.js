/* eslint-disable function-paren-newline */
import axios from 'axios'
import { getToken } from '../src/tools/utils'

class Api {
  constructor(path) {
    this.path = path
    this.headers = { 'Content-Type': 'application/json' }
    this.token = getToken()
    this.authInstance = this.token ? axios.create({
      headers: {
        authorization: `Bearer ${this.token}`,
        'Content-Type': 'application/json',
      },
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
      baseURL: this.path,
    }) : axios.create({
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
      baseURL: this.path,
    })
  }

  signUp(name, password, email) {
    const res = axios.post(`${this.path}/signUp`,
      {
        name,
        password,
        email,
      },
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
    const res = axios.get(`${this.path}/products`)
    return res
  }

  getProductById(id) {
    const res = axios.get(`${this.path}/products/${id}`)
    return res
  }

  getProductByIdCart(ids) {
    const res = Promise.all(ids.map((id) => axios.get(`${this.path}/products/${id}`)))
    return res
  }

  getProductsCategory() {
    const res = axios(`${this.path}/category`)
    return res
  }
}

const api = new Api('http://localhost:3050/api/v0.1/client')
const adminApi = new Api('http://localhost:3050/api/v0.1/admin')

export {
  api,
  adminApi,
}
