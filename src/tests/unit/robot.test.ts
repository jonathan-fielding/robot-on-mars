import Robot from '../../lib/robot';
import { Direction } from '../../lib/robot';

test('Check robot values', () => {
  const robot = new Robot(0, 0, 'N');

  expect(robot.x).toEqual(0);
  expect(robot.y).toEqual(0);
  expect(robot.direction).toEqual(Direction.North);
});

test('Check robot moves left', () => {
  const robot = new Robot(0, 0, 'N');
  expect(robot.direction).toEqual(Direction.North);

  robot.left();
  expect(robot.direction).toEqual(Direction.West);
});

test('Check robot moves right', () => {
  const robot = new Robot(0, 0, 'N');
  expect(robot.direction).toEqual(Direction.North);

  robot.right();
  expect(robot.direction).toEqual(Direction.East);
});

test('Check robot moves south', () => {
  const robot = new Robot(0, 3, 'S');
  expect(robot.direction).toEqual(Direction.South);

  robot.forward();
  expect(robot.y).toEqual(2);
});

test('Check robot moves east', () => {
  const robot = new Robot(0, 0, 'E');
  expect(robot.direction).toEqual(Direction.East);

  robot.forward();
  expect(robot.x).toEqual(1);
});
