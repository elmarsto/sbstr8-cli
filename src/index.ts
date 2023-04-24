import { Command } from 'commander';
import figlet from 'figlet';

import project from './project';
import post from './post';
import run from './run';

console.log(
  figlet.textSync('sbstr8', {
    font: 'Soft',
  }),
);

const program = new Command();

program.name('sb').version('0.0.1').description('sbstr8 CLI');

// dependency injection pattern
project(program);
post(program);
run(program);

program.parse(process.argv);
