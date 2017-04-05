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
    console.log("container");
   return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text>Yeah!</Text>
           <AppRouter/>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //...fonts.regular,
    height: 100
  },
  inner: {
    padding: 30
  }
})
