import React from 'react'
import { Navigation } from 'react-native-navigation'
import { container } from '../../ioc/container'
import { DetailsView } from './detailsView'

export class DetailsViewController extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      details: [],
    }
    Navigation.mergeOptions(props.componentId, {
      topBar: {
        backButton: {
          color: '#fff',
        },
        elevation: 0,
        background: {
          color: '#263238',
        },
        title: {
          text: 'Detalhes',
          color: '#fff',
        },
      },
    })
  }

  componentDidMount() {
    const { detailsApplication } = container
    const { id } = this.props
    detailsApplication.searchFromId(id)
      .then((details) => {
        this.setState({ details: details.drinks[0] })
      })
  }

  render() {
    return (
      <DetailsView {...this.state} />
    )
  }
}
