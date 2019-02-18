export class DrinksService {
  constructor({ requestService, config }) {
    this.requestService = requestService
    this.config = config
  }

  async list(filter) {
    const { drinks, search } = this.config.url
    const url = this.config.urlParam(filter.query ? search : drinks)
      .replace('$data', filter.query ? filter.query : filter)

    const method = this.config.method(drinks)
    const listDrinks = await this.requestService[method](url)
    return listDrinks
  }
}
