import { Command } from 'commander';

export const init = (name: string) => {
  console.log(`TODO: Creating new Substrate project ${name}`);
};

export const upgrade = () => {
  console.log(`TODO: Upgrade to latest Substrate using git subtree`);
};

export const mount = () => {
  console.log(`TODO: Mount unionfs`);
};

export default (program: Command) => {
  program
    .command('init') // new
    .description('Create a new sbstr8 project')
    .argument('<name>', 'Name of the project')
    .action(init);

  program
    .command('upgrade') // update
    .description('Rebase your project on the latest sbstr8 version')
    .action(upgrade);

  program
    .command('mount') // mount unionfs
    .description(
      'Mount unionfs to overlay your project on the latest sbstr8 version',
    )
    .action(mount);
};
