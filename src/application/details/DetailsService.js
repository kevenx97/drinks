export class DetailsService {
  constructor({ requestService, config }) {
    this.requestService = requestService
    this.config = config
  }

  async searchFromId(id) {
    const { lookup } = this.config.url
    const url = this.config.urlParam(lookup).replace('$data', id)
    const method = this.config.method(lookup)
    const detail = await this.requestService[method](url)
    return detail
  }
}
