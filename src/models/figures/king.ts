import { Cell } from '../cell'
import { Colors } from '../colors'
import { Figure, FigureName } from './figure'
import blackLogo from '../../assets/black-king.png'
import WhiteLogo from '../../assets/white-king.png'

export class King extends Figure {
  constructor (color: Colors, cell: Cell) {
    super(color, cell)
    this.logo = color === Colors.BLACK ? blackLogo : WhiteLogo
    this.name = FigureName.KING
  }

  canMove (target: Cell): boolean {
    if (!super.canMove(target)) return false
    return true
  }
};
