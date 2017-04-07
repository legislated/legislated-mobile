// @flow
import React, { Component } from 'react'
import { fonts } from './styles'
import { AppRouter } from './router'
import { StyleSheet, Text, View } from 'react-native';
export default class Container extends Component {
  props: {
    children?: any
  }

  render () {
    return <View style={styles.container}>
      <AppRouter />
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30
  }
})
