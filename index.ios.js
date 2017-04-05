/**
 * Legislated React Native App
 * https://github.com/legislated/legislated-mobile
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Container } from './src/scenes';

export default class Legislated extends Component {
  render() {
    return (
      <Container />
    );
  }
}

AppRegistry.registerComponent('Legislated', () => Legislated);
