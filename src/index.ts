import { Command } from 'commander';
import figlet from 'figlet';

import project from './project';
import post from './post';

console.log(
  figlet.textSync('Substrate', {
    font: 'Script',
  }),
);

const program = new Command();

program.name('sb').version('0.0.1').description('sbstr8 CLI');

// dependency injection pattern
project(program);
post(program);

program.parse(process.argv);
