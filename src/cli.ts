#!/usr/bin/env node

import * as inquirer from 'inquirer';
import * as commander from 'commander';
import render from './lib/render';
import RobotGame from './lib/robot-game';

const program = new commander.Command();
const actionRegex = new RegExp(/^[LFR]+$/);
let width = 0;
let height = 0;

// Inherit version from the package.json
program.version(require('../package.json').version);

// Add debug flag for debugging
program
  .arguments('<width> <height>')
  .action((theWidth: string, theHeight: string) => {
    width = parseInt(theWidth, 10);
    height = parseInt(theHeight, 10);
  })
  .option('-d, --debug', 'output extra debugging');

// Add useful custom help text
program.on('--help', function() {
  console.log('');
  console.log('Examples:');
  console.log('  $ robot-on-mars --output budget.json');
});

// Allow commander to parse the args
program.parse(process.argv);

// For debugging purposes output the options and file path
if (program.debug) {
  console.log({
    ...program.opts(),
  });
}

function validateInstructions(value: any) {
  if (value === 'EXIT') {
    return true;
  }

  const parts = value.split(' ');
  const has4Parts = parts.length === 4;
  const x = parseInt(parts[0], 10);
  const y = parseInt(parts[1], 10);
  const isDirection = ['N', 'E', 'S', 'W'].includes(parts[2]);
  const isActionString = actionRegex.test(parts[3]);

  return has4Parts && !isNaN(x) && !isNaN(y) && isDirection && isActionString;
}

async function robotInstruction(robotGame: RobotGame) {
  const input = await inquirer.prompt([
    {
      message: 'How would you like to instruct your robot? (Or EXIT to Exit)',
      name: 'instructions',
      validate: validateInstructions,
    },
  ]);

  if (input.instructions === 'EXIT') {
    return;
  }

  const instructions = input.instructions.split(' ');
  const x = parseInt(instructions[0], 10);
  const y = parseInt(instructions[1], 10);
  const direction = instructions[2];
  const movement = instructions[3];

  const robot = robotGame.instructRobot(x, y, direction, movement);

  render(robot);

  await robotInstruction(robotGame);
}

(async () => {
  const robotGame = new RobotGame(width, height, render);

  await robotInstruction(robotGame);
})();
