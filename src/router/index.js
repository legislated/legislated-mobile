// @flow
import React from 'react'
import { View, StyleSheet } from 'react-native'
import { MemoryRouter as Router } from 'react-router'
import { RelayRoute } from './relay_route'
import { billsRoute } from '../scenes'

export const AppRouter = () => (
  <Router>
    <View className={styles.container}>
      <RelayRoute exactly pattern='/' {...billsRoute} />
    </View>
  </Router>
)

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
