import RobotGame from '../../lib/robot-game';

test('Check grid is assembled correctly', () => {
  const height = 10;
  const width = 5;
  const robotGame = new RobotGame(width, height);

  expect(robotGame.grid.length).toEqual(height + 1);

  robotGame.grid.forEach(row => {
    expect(row.length).toEqual(width + 1);
  });
});

test('Check robot leaves scent before faling off the planet', () => {
  const robotGame = new RobotGame(5, 3);
  const robot1 = robotGame.instructRobot(1, 1, 'W', 'FF');

  expect(robot1.x).toEqual(0);
  expect(robot1.y).toEqual(1);
  expect(robot1.direction).toEqual('W');
  expect(robot1.lost).toEqual(true);
});

test('Check provided test cases', () => {
  const robotGame = new RobotGame(5, 3);
  const robot1 = robotGame.instructRobot(1, 1, 'E', 'RFRFRFRF');

  expect(robot1.x).toEqual(1);
  expect(robot1.y).toEqual(1);
  expect(robot1.direction).toEqual('E');
  expect(robot1.lost).toEqual(false);

  const robot2 = robotGame.instructRobot(3, 2, 'N', 'FRRFLLFFRRFLL');

  expect(robot2.x).toEqual(3);
  expect(robot2.y).toEqual(3);
  expect(robot2.direction).toEqual('N');
  expect(robot2.lost).toEqual(true);

  const robot3 = robotGame.instructRobot(0, 3, 'W', 'LLFFFLFLFL');

  expect(robot3.x).toEqual(2);
  expect(robot3.y).toEqual(3);
  expect(robot3.direction).toEqual('S');
  expect(robot3.lost).toEqual(false);
});
