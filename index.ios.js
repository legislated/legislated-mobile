import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { Container } from './src/scenes'

export default class Legislated extends Component {
  render () {
    return <Container />
  }
}

AppRegistry.registerComponent('Legislated', () => Legislated)
