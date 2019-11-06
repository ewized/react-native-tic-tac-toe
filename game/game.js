
import Board from './board.js'

export default class Game {
  constructor() {
    this.board = new Board(this)
    this.turn = 0
    this.id = Game.id++
  }

  static id = 0

  turnSymbols = ['X', 'O']
  turnColors = ['#32a852', '#db1f1f']

  get turnSymbol() {
    return this.turnSymbols[this.turn] || '?'
  }

  get turnColor() {
    return this.turnColors[this.turn] || '#345'
  }

  /** Place the player's symbol and check if there is a winner */
  placeTurn(x, y, winner_callback) {
    this.board.placeTurn(x, y)
    // check the solution and run the callback
    let isSolved = this.board.isSolved()
    if (winner_callback && isSolved) {
      return winner_callback(isSolved)
    }
    this.turn = this.turn == 1 ? 0 : 1
  }
}
