export class DetailsApplication {
  constructor({ detailsService }) {
    this.detailsService = detailsService
  }

  async searchFromId(id) {
    try {
      const details = await this.detailsService.searchFromId(id)
      return details
    } catch (error) {
      throw new Error('Serviço indisponível')
    }
  }
}
