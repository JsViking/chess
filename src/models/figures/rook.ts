import { Cell } from '../cell'
import { Colors } from '../colors'
import { Figure, FigureName } from './figure'
import blackLogo from '../../assets/black-rook.png'
import WhiteLogo from '../../assets/white-rook.png'

export class Rook extends Figure {
  constructor (color: Colors, cell: Cell) {
    super(color, cell)
    this.logo = color === Colors.BLACK ? blackLogo : WhiteLogo
    this.name = FigureName.ROOK
  }

  canMove (target: Cell): boolean {
    if (!super.canMove(target)) return false
    if (this.cell.isEmptyVertical(target)) return true
    if (this.cell.isEmptyHorizontal(target)) return true
    return false
  }
};
