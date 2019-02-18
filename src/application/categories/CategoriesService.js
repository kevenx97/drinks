export class CategoriesService {
  constructor({ requestService, config }) {
    this.requestService = requestService
    this.config = config
  }

  async list() {
    const { categories } = this.config.url
    const url = this.config.urlParam(categories)
    const method = this.config.method(categories)
    const listCategories = await this.requestService[method](url)
    return listCategories
  }
}
