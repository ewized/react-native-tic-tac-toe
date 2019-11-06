
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import GamePlayer from './GamePlayer.js'
import GameBoard from './GameBoard.js'
import GameWinner from './GameWinner.js'
import game_manager from '../game/game_manager.js'


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})


export default class GameApp extends Component {

  constructor(props) {
    super(props)
    let game = game_manager.currentGame
    this.state = {
      game: game,
      turn: game.turnSymbol,
      turnColor: game.turnColor,
      board: game.board,
      winner: false
    }
  }

  /** On each turn for the player update that spot on the game board and if a winer has been found update the state */
  onTurn(x, y) {
    this.state.game.placeTurn(x, y, winner => this.setState({ winner: winner }))
    this.setState(state => ({
      turn: state.game.turnSymbol,
      turnColor: state.game.turnColor,
      board: state.game.board,
    }))
  }

  /** Trigger a new game */
  onPlayAgain() {
    // update the game state
    this.setState({ game: game_manager.newGame() })
    // once we have the new game state use that to update the rest of the views
    this.setState(state => ({
      winner: false,
      turn: state.game.turnSymbol,
      turnColor: state.game.turnColor,
      board: state.game.board,
    }))
  }

  render() {
    return (
      <View style={styles.container}>
        <GamePlayer color={this.state.turnColor} text={`${this.state.turn}'s Turn`} />
        <GameBoard board={this.state.board} highlight={this.state.winner?.board} onTurn={(x, y) => this.onTurn(x, y)} />
        {this.state.winner && <GameWinner winner={this.state.winner} onPlayAgain={() => this.onPlayAgain()} />}
      </View>
    )
  }
}
