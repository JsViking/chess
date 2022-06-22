import { Board } from './board'
import { Colors } from './colors'
import { Figure } from './figures/figure'

export class Cell {
  readonly x: number
  readonly y: number
  readonly color: Colors
  figure: Figure | null
  board: Board
  available: boolean
  id: number

  constructor (board: Board, x: number, y: number, color: Colors, figure: Figure | null) {
    this.x = x
    this.y = y
    this.board = board
    this.color = color
    this.figure = figure
    this.available = false
    this.id = Math.random()
  }
}
