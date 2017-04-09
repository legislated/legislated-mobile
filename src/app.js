// @flow
import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { createRelayEnvironment } from './relay'
import { AppRouter } from './router'

// bootstrap relay
createRelayEnvironment()

export class App extends Component {
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
