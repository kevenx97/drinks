import axios from 'axios'

export class RequestService {
  get(url) {
    return axios.get(url).then(res => res.data)
  }
}
