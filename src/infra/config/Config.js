export class Config {
  constructor(data) {
    Object.assign(this, data)
  }

  get url() {
    return this.urls[this.env]
  }

  urlParam({ param }) {
    return `${this.url.base}/${param}`
  }

  method({ method }) {
    return method
  }
}
