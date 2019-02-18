import Bottle from 'bottlejs'
import { Config } from '../infra/config/Config'
import { RequestService } from '../infra/services/RequestService'
import { DrinksService } from '../application/drinks/DrinksService'
import { DrinksApplication } from '../application/drinks/DrinksApplication'
import { CategoriesService } from '../application/categories/CategoriesService'
import { CategoriesApplication } from '../application/categories/CategoriesApplication'
import { DetailsService } from '../application/details/DetailsService'
import { DetailsApplication } from '../application/details/DetailsApplication'

const bottle = new Bottle()

// Infra
bottle.factory('config', () => new Config(require('../../app.json')))
bottle.factory('requestService', () => new RequestService())

// Application Service
bottle.factory('categoriesService', container => new CategoriesService(container))
bottle.factory('drinksService', container => new DrinksService(container))
bottle.factory('detailsService', container => new DetailsService(container))

// Application
bottle.factory('categoriesApplication', container => new CategoriesApplication(container))
bottle.factory('drinksApplication', container => new DrinksApplication(container))
bottle.factory('detailsApplication', container => new DetailsApplication(container))

export const { container } = bottle
