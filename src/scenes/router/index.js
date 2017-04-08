// @flow
import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Route, MemoryRouter as Router } from 'react-router'
import { BillsView } from '../bills'

export const AppRouter = () => (
  <Router>
    <View className={styles.container}>
      <Route exactly pattern='/' component={BillsView} />
    </View>
  </Router>
)

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
