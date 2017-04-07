// @flow
import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Route, MemoryRouter as Router } from 'react-router'
import { Test } from '../bills'

export const AppRouter = () => (
  <Router>
    <View className={styles.container}>
      <Route exactly pattern='/' component={Test} />
    </View>
  </Router>
)

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
