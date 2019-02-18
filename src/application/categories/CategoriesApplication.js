export class CategoriesApplication {
  constructor({ categoriesService }) {
    this.categoriesService = categoriesService
  }

  async list() {
    try {
      const categories = await this.categoriesService.list()
      return categories
    } catch (error) {
      throw new Error('Serviço indisponível')
    }
  }
}
