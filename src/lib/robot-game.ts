import Robot from './robot';

class RobotGame {
  private gridWidth: number;
  private gridHeight: number;
  private renderer: Function;
  public grid: any[][];

  constructor(
    gridWidth: number,
    gridHeight: number,
    renderer: Function = (arr: string[][]) => {}
  ) {
    this.gridWidth = gridWidth + 1;
    this.gridHeight = gridHeight + 1;
    this.renderer = renderer;

    this.grid = [...Array(this.gridHeight)].map(() => {
      return [...Array(this.gridWidth)];
    });
  }

  instructRobot(x: number, y: number, direction: string, input: string) {
    const robot = new Robot(x, y, direction);
    const instructions = Array.from(input);

    for (let index = 0; index < instructions.length; index++) {
      const instruction = instructions[index];

      switch (instruction) {
        case 'F':
          const move = robot.tryMove();

          if (
            this.grid[robot.x][robot.y] &&
            this.grid[robot.x][robot.y].direction === robot.direction
          ) {
            break;
          } else if (
            move.x >= this.gridWidth ||
            move.x < 0 ||
            move.y >= this.gridHeight ||
            move.y < 0
          ) {
            robot.isLost();
            this.grid[robot.x][robot.y] = robot; // Leave a scent
          } else {
            robot.forward();
          }

          break;
        case 'R':
          robot.right();
          break;
        case 'L':
          robot.left();
          break;
        default:
          break;
      }

      if (robot.lost) {
        break;
      }
    }

    return robot;
  }
}

export default RobotGame;
