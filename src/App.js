import { Navigation } from 'react-native-navigation'
import { DetailsViewController } from './view/details/detailsViewController'
import { CategoriesViewController } from './view/categories/categoriesViewController'

Navigation.registerComponent('view.categories', () => CategoriesViewController)
Navigation.registerComponent('view.details', () => DetailsViewController)

Navigation.events().registerAppLaunchedListener(() => (
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'view.categories',
            },
          },
        ],
        options: {
          layout: {
            orientation: ['portrait'],
          },
          topBar: {
            elevation: 0,
            background: {
              color: '#263238',
            },
            title: {
              text: 'Categories',
              color: '#fff',
            },
          },
        },
      },
    },
  })
))
