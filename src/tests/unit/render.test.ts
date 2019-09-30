import render from '../../lib/render';
import Robot from '../../lib/Robot';

test('Check grid is assembled correctly for not lost', () => {
  const robot = new Robot(1, 2, 'W');

  render(robot, (str: string) => {
    expect(str).toMatch('1 2 W');
  });
});

test('Check grid is assembled correctly for lost robot', () => {
  const robot = new Robot(1, 2, 'W');
  robot.isLost();

  render(robot, (str: string) => {
    expect(str).toMatch('1 2 W LOST');
  });
});
