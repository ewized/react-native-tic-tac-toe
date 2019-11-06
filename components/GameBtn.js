
import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'


const styles = StyleSheet.create({
  btn: {
    height: 75,
    width: 75,
    justifyContent: 'center',
    margin: 5,
  },
  btnText: {
    color: '#fefefe',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
  },
})


export default class GameBtn extends Component {
  
  render() {
    let text = (
      <View style={[styles.btn, { backgroundColor: this.props.highlight ? '#abd' : '#678' }]}>
        <Text style={styles.btnText}>{typeof this.props.symbol == 'boolean' ? (this.props.symbol ? '1' : '0') : this.props.symbol}</Text>
      </View>
    )
    if (this.props.symbol) {
      return text
    }
    return (
      <TouchableOpacity onPress={() => this.props.placeSymbol()}>
        {text}
      </TouchableOpacity>
    )
  }
}
