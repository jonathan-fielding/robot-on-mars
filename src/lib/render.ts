import Robot from './robot';

export default (robot: Robot, method = console.log) => {
  method(
    `${robot.x} ${robot.y} ${robot.direction} ${robot.lost ? 'LOST' : ''}`
  );
};
