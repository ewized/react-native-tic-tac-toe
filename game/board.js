
import SOLVED_BOARDS from './board_solutions.js'

// The size of the board and match the dimensions of the solutions file
const BOARD_SIZE = 3
// The min amount of turn before the solving checks happen
const MIN_SOLUTIONS = 4

export default class Board {

  constructor(game, board) {
    this.game = game
    this.board = board ? board : [ ...Array(BOARD_SIZE) ].map(_ => [ ...Array(BOARD_SIZE) ].map(_ => null))
    this.count = 0
  }

  /** Run the current board through the solution to check if we have a winner or tie */
  isSolved() {
    // never a solution can be made with not enuf tiles
    if (this.count <= MIN_SOLUTIONS) {
      return false
    }
    // Check possiblities
    for (let turn in this.game.turnSymbols) {
      let turnSymbol = this.game.turnSymbols[turn]
      // iterate each solution to check if the turn will match one of the solutions
      for (let board in SOLVED_BOARDS) {
        let matches = 0
        // count the matches that we found
        for (let x = 0 ; x < BOARD_SIZE ; x++) {
          for (let y = 0 ; y < BOARD_SIZE ; y++) {
            if (this.board[x][y] === turnSymbol && SOLVED_BOARDS[board][x][y]) {
              matches++
            }
          }
        }
        // We have found a match return the turn who won
        if (matches == 3) {
          return { tie: false, turn: this.game.turnSymbols[turn], board: SOLVED_BOARDS[board] }
        }
      }
    }
    return this.count == BOARD_SIZE ** 2 ? { tie: true } : false
  }

  /** Place the current symbol in the spot on the grid */
  placeTurn(x, y) {
    if (x < 0 || x > BOARD_SIZE - 1) {
      return console.log('BAD X')
    }
    if (y < 0 || y > BOARD_SIZE - 1) {
      return console.log('BAD Y')
    }
    if (this.board[x][y]) {
      return console.log('SPOT TAKEN')
    }
    // place the symbol for the turn
    this.board[x][y] = this.game.turnSymbol
    // used to find ties and a small performance tweak when there are few tiles
    this.count++
  }

  /** Print out the string version of this board used for debugging */
  toString() {
    let str = ''
    for (let x = 0 ; x < BOARD_SIZE ; x++) {
      for (let y = 0 ; y < BOARD_SIZE ; y++) {
        str += this.board[x][y] + " "
      }
      str += '\n'
    }
    return str
  }
}
