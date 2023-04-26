#!/usr/bin/env node
import { Command } from 'commander';
import figlet from 'figlet';

import project from './project.js';
import post from './post.js';
import run from './run.js';

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
