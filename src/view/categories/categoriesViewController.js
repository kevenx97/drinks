import React from 'react'
import { Navigation } from 'react-native-navigation'
import { container } from '../../ioc/container'
import { CategoriesView } from './categoriesView'

export class CategoriesViewController extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notResult: false,
      listCategories: [],
      drinksFromCategories: [],
    }
    this.onChangeTab = this.handleOnChangeTab.bind(this)
    this.navigateDetails = this.handleNavigateDetails.bind(this)
    this.handleOnChangeInput = this.handleOnChangeInput.bind(this)
  }

  componentDidMount() {
    const { categoriesApplication } = container
    categoriesApplication.list()
      .then((categories) => {
        this.setState({ listCategories: categories.drinks })
        this.onChangeTab(0)
      })
  }

  handleOnChangeInput(query) {
    if (query !== '') {
      const { drinksApplication } = container
      this.setState({ drinksFromCategories: [] })

      drinksApplication.list({ query })
        .then((drinks) => {
          this.setState({
            drinksFromCategories: [...drinks.drinks],
            notResult: false,
          })
        }).catch(() => {
          this.setState({
            drinksFromCategories: [],
            notResult: true,
          })
        })
    }
  }


  handleOnChangeTab(index) {
    const { drinksApplication } = container
    const { listCategories } = this.state
    this.setState({ drinksFromCategories: [] })

    if (listCategories.length) {
      const categorieName = listCategories[index].strCategory
      drinksApplication.list(categorieName)
        .then((drinks) => {
          this.setState({
            drinksFromCategories: [...drinks.drinks],
            notResult: false,
          })
        })
    }
  }

  handleNavigateDetails(id, title) {
    const { componentId } = this.props
    Navigation.push(componentId, {
      component: {
        name: 'view.details',
        passProps: {
          id,
          title,
        },
      }
    })
  }

  render() {
    return (
      <CategoriesView
        onChangeInput={this.handleOnChangeInput}
        navigateDetails={this.navigateDetails}
        onChangeTab={this.onChangeTab}
        {...this.state}
      />
    )
  }
}
