export class DrinksApplication {
  constructor({ drinksService }) {
    this.drinksService = drinksService
  }

  async list(filter) {
    try {
      const drinks = await this.drinksService.list(filter)
      return drinks
    } catch (error) {
      throw new Error('Serviço indisponível')
    }
  }
}
