// @flow
import React, { Component } from 'react'
import { Button, StyleSheet } from 'react-native';
import { colors, shadows } from '../../styles'

export default class LoadMoreButton extends Component {
  props: {
    style?: Object,
    hasMore: boolean,
    onClick: Function
  }

  // events
  didClickLink = () => {
    this.props.onClick()
  }

  // lifecycle
  render () {
    const { style, hasMore } = this.props
    if (!hasMore) {
      return null
    }

    return (
    <Button
      onPress={didClickLink}
      title="Load More"
      color="#841584"
      accessibilityLabel="Load More"
    />
    );
  }
}

const styles = StyleSheet.create({
  button: {
    ...shadows.make(colors.primaryShadow, 5),
    height: 40,
    minWidth: 100,
    padding: '0 5%',
    fontSize: 18,
    lineHeight: 40,
    textAlign: 'center',
    color: colors.white/*,
    backgroundColor: colors.primary,
    transition: 'background-color 0.25s',
    ':hover': {
      backgroundColor: colors.primaryHighlight
    }*/
  }
})
