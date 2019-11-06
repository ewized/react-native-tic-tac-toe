
import React, { Component } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'


const styles = StyleSheet.create({
  winnerWrapper: {
    backgroundColor: '#ffffffaa',
    position: 'absolute',
    height: '100%',
    width: '100%',
    zIndex: 1000,
    padding: 50,
  },
  winnerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 25,
  },
  winner: {
    backgroundColor: '#567',
    paddingTop: 50,
    paddingBottom: 25,
    paddingLeft: 25,
    paddingRight: 25,
  },
})


// export default class GameWinner extends Component {
//
//   render() {
//     return (
//       <View style={styles.winnerWrapper}>
//         <View style={styles.winner}>
//           <Text style={styles.winnerText}>{this.props.winner.tie ? 'Tie' : `Winner ${this.props.winner.turn}'s`}</Text>
//           <Button title='Play Again?' onPress={() => this.props.onPlayAgain()} />
//         </View>
//       </View>
//     )
//   }
// }


export default ({ winner: { turn, tie }, onPlayAgain }) => (
  <View style={styles.winnerWrapper}>
    <View style={styles.winner}>
      <Text style={styles.winnerText}>{tie ? 'Tie' : `Winner ${turn}'s`}</Text>
      <Button title='Play Again?' onPress={onPlayAgain} />
    </View>
  </View>
)
