export enum Direction {
  North = 'N',
  South = 'S',
  East = 'E',
  West = 'W',
}

const directionOrder: Direction[] = [
  Direction.North,
  Direction.East,
  Direction.South,
  Direction.West,
];

class Robot {
  public x: number;
  public y: number;
  public direction: Direction;
  public lost: boolean;

  constructor(x: number, y: number, directionInput: string) {
    this.lost = false;
    this.x = x;
    this.y = y;
    this.direction = Robot.directionInput(directionInput);
  }

  isLost() {
    this.lost = true;
  }

  left() {
    const position = directionOrder.indexOf(this.direction);
    this.direction =
      position === 0 ? directionOrder[3] : directionOrder[position - 1];
  }

  right() {
    const position = directionOrder.indexOf(this.direction);
    this.direction =
      position === 3 ? directionOrder[0] : directionOrder[position + 1];
  }

  forward() {
    switch (this.direction) {
      case Direction.North:
        this.y = this.y + 1;
        break;
      case Direction.South:
        this.y = this.y - 1;
        break;
      case Direction.East:
        this.x = this.x + 1;
        break;
      case Direction.West:
        this.x = this.x - 1;
        break;
      default:
        break;
    }
  }

  tryMove() {
    const nextMove = {
      x: this.x,
      y: this.y,
    };

    switch (this.direction) {
      case Direction.North:
        nextMove.y = this.y + 1;
        break;
      case Direction.South:
        nextMove.y = this.y - 1;
        break;
      case Direction.East:
        nextMove.x = this.x + 1;
        break;
      case Direction.West:
        nextMove.x = this.x - 1;
        break;
      default:
        break;
    }

    return nextMove;
  }

  static directionInput(direction: string): Direction {
    switch (direction) {
      case 'E':
        return Direction.East;
      case 'S':
        return Direction.South;
      case 'W':
        return Direction.West;
      default:
        return Direction.North;
    }
  }
}

export default Robot;
