import { Command } from 'commander';
import figlet from 'figlet';
import { useState, useEffect } from 'react';
import { render, Text } from 'ink';

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

// program.parse(process.argv);

const Counter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((previousCounter: number) => previousCounter + 1);
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <Text color="green">{counter} tests passed</Text>;
};

render(<Counter />);
