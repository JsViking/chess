/* eslint-disable no-mixed-operators */
import { Cell } from '../cell'
import { Colors } from '../colors'
import { Figure, FigureName } from './figure'
import blackLogo from '../../assets/black-pawn.png'
import WhiteLogo from '../../assets/white-pawn.png'

export class Pawn extends Figure {
  isFirstStep: boolean = true
  constructor (color: Colors, cell: Cell) {
    super(color, cell)
    this.logo = color === Colors.BLACK ? blackLogo : WhiteLogo
    this.name = FigureName.PAWN
  }

  canMove (target: Cell): boolean {
    if (!super.canMove(target)) return false
    const direction = this.cell.figure?.color === Colors.BLACK ? 1 : -1
    const firstStepDirection = this.cell.figure?.color === Colors.BLACK ? 2 : -2

    if (!this.cell.board.getCell(target.x, target.y).isEmpty()) return false
    console.log('CAN MOVE', target.y)
    if (this.isFirstStep && (target.y === this.cell.y + firstStepDirection)) {
      return true
    } else if (target.y === this.cell.y + direction) {
      return true
    }

    return false
  }

  moveFigure (target: Cell) {
    super.moveFigure(target)
    this.isFirstStep = false
  }
};
