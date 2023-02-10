import axios from 'axios'

class Api {
  constructor() {
    this.path = 'http://localhost:3050/api/v0.1'
  }

  getAllProducts() {
    return axios.get(`${this.path}/products`)
  }
}

const api = new Api()

export {
  api,
}
