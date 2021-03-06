# ROBOT ON MARS CLI GAME

The surface of Mars can be modelled by a rectangular grid around which robots are able to move according to instructions provided from Earth. You are to write a program that determines each sequence of robot positions and reports the final position of the robot.

## Setup

To setup `robot-on-mars` you will need to:

1 - clone https://github.com/jonathan-fielding/typescript-cli-template.git

2 - run `npm i`

3 - run `npm run build`

4 - run `npm link`

## Using `robot-on-mars`

The simplest way to use `robot-on-mars` is to run the CLI along with the co-ordernates of the upper right corner e.g

```robot-on-mars 5 3```

You will then be asked to add a robot to the planet using the format `X Y DIRECTION ACTIONS` e.g `1 1 E RFRFRFRF`.

You will keep being prompted to add subsquent robots to the planet, once you are done you an enter `EXIT`.

### Additional Options:

`-v`, `--version` -  output the version number

`-d`, `--debug` - output extra debugging

`-h`, `--help` - output usage information

