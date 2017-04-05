// @flow
import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { fonts, colors, shadows, borders } from '../../styles'

export default class SearchField extends Component {
  props: {
    value: string,
    style?: Object,
    onChange: (string) => void
  }

  state = {
    isFocused: false
  }

  // events
  inputDidChange = (event: { target: { value: string } }) => {
    const { onChange } = this.props
    onChange(event.target.value)
  }

  inputDidChangeFocus = (isFocused: boolean) => {
    this.setState({ isFocused })
  }

  // lifecycle
  render () {
    const { value, style } = this.props
    const { isFocused } = this.state

    return (
    <View style={styles.container}>
            {/*<div className={styles.container, style}>*/}
      <Text style={styles.prompt}>What's important to you?</Text>
      <View style={styles.field, isFocused && styles.focused}>
        {/*<FontAwesome
          className={css(styles.icon, isFocused && styles.iconFocused)}
          name='search'
        />*/}
        <TextInput
          style={styles.input}
          placeholder="health care, HB2364"
          onChangeText={(value) => this.setState({value})}
        />
      </View>
    </View>
            );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  prompt: {
    ...fonts.regular,
    marginBottom: 15,
    fontSize: 24
  },
  field: {
    ...shadows.low,
    ...borders.low,
    display: 'flex',
    alignItems: 'center',
    height: 50,
    padding: '0 15px'//,
    //backgroundColor: colors.white,
    //transition: 'box-shadow 0.25s, border 0.25s, transform 0.25s',
    //transform: 'perspective(200px) translateZ(0px)'
  },
  focused: {
    ...shadows.high,
    ...borders.high//,
    //transform: 'perspective(200px) translateZ(1px)'
  },
  icon: {
    marginRight: 15,
    //transition: 'color 0.25'
  },
  iconFocused: {
    color: colors.primary
  },
  input: {
    ...fonts.regular,
    flex: 1,
    fontSize: 20//,
    //border: 'none',
    /*':focus': {
      outline: 'none'
    }*/
  }
})
