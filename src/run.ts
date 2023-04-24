import { Command } from 'commander';

export const run = (command: string) => {
  console.log(`TODO: npm run ${command}`);
};

export default (program: Command) =>
  program
    .command('run') // this is pointless but for completeness it's here
    .description('passthrough to npm')
    .action(run);
