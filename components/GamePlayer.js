
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'


const styles = StyleSheet.create({
  not: {
    flex: 1,
    backgroundColor: '#567',
    textAlign: 'center',
    margin: 25,
    padding: 15,
    justifyContent: 'center',
  },
  notText: {
    fontSize: 36,
    color: '#fff',
    textAlign: 'center',
    padding: 15,
  },
})


export default class GamePlayer extends Component {
  
  render() {
    return (
      <View style={[ styles.not, { backgroundColor: this.props.color || styles.not.backgroundColor } ]}>
        <Text style={styles.notText}>{this.props.text}</Text>
      </View>
    )
  }
}
