
import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

import GameBtn from './GameBtn'


const styles = StyleSheet.create({
  bodyWrapper: {
    flex: 8,
  },
  body: {
    margin: 25,
    flex: 1,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
})


export default class GameBoard extends Component {

  render() {
    return (
      <View style={styles.bodyWrapper}>
        <View style={styles.body}>
          {this.props.board.board.map((row, x) => (
            <View key={x} style={styles.row}>
              {row.map((i, y) => <GameBtn highlight={this.props.highlight ? this.props.highlight[x][y] : false} symbol={i} key={y} placeSymbol={() => this.props.onTurn(x, y)} />)}
            </View>
          ))}
        </View>
      </View>
    )
  }
}
