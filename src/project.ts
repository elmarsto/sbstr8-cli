import { Command } from 'commander';

export const init = (name: string) => {
  console.log(`TODO: Creating new Substrate project ${name}`);
};

export const upgrade = () => {
  console.log(`TODO: Upgrade to latest Substrate`);
};

export default (program: Command) => {
  program
    .command('init') // new
    .description('Create a new Substrate project')
    .argument('<name>', 'Name of the project')
    .action(init);

  program
    .command('upgrade') // update
    .description('Rebase your project on the latest Substrate version')
    .action(upgrade);
};
