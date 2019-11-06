
import Game from './game.js'
import Board from './board.js'
import SOLVED_BOARDS from './board_solutions.js'

/**
  The game manager that allows the creation of new games, for this simple
  application this is a bit of overkill but allows for more advance game state
  management later on.
*/
class GameManager {

  /** Create a new game */
  newGame() {
    this.game = new Game()
    return this.currentGame
  }

  /** Get the current active game */
  get currentGame() {
    if (!this.game) {
      this.newGame()
    }
    return this.game
  }

  /** Used for debugging */
  get solved_boards() {
    return SOLVED_BOARDS.map(board => new Board(this.game, board))
  }
}

const gameManager = new GameManager()

export default gameManager
