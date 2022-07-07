import { Cell } from '../cell'
import { Colors } from '../colors'
import { Figure, FigureName } from './figure'
import blackLogo from '../../assets/black-bishop.png'
import WhiteLogo from '../../assets/white-bishop.png'

export class Bishop extends Figure {
  constructor (color: Colors, cell: Cell) {
    super(color, cell)
    this.logo = color === Colors.BLACK ? blackLogo : WhiteLogo
    this.name = FigureName.BISHOP
  }

  canMove (target: Cell): boolean {
    if (!super.canMove(target)) return false
    if (this.cell.isEmptyDiagonal(target)) return true
    return false
  }
};
