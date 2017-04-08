// @flow
import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { AppRouter } from './router'

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
