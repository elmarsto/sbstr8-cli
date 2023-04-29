#!/usr/bin/env node
import { Command } from 'commander';
import figlet from 'figlet';
import inquirer from 'inquirer';

import project from './project.js';
import post from './post.js';
import run from './run.js';

console.log(
  figlet.textSync('sbstr8', {
    font: 'Soft',
  }),
);

const prompt = inquirer.createPromptModule();

const program = new Command();
program.name('sb').version('0.0.1').description('sbstr8 CLI');

// dependency injection pattern
project(program, prompt);
post(program, prompt);
run(program, prompt);

program.parse(process.argv);
