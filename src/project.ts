import { Command } from 'commander';
import { PromptFunction } from 'inquirer';

export const init = (prompt: PromptFunction) => async (name: string) => {
  const answers = await prompt([
    {
      type: 'confirm',
      name: 'isPrivate',
    },
  ]);
  console.log(name, answers);
};

export const upgrade = (prompt: PromptFunction) => async () => {
  console.log(`TODO: Upgrade to latest Substrate using git subtree`);
};

export const mount = (prompt: PromptFunction) => async () => {
  console.log(`TODO: Mount unionfs`);
};

export default (program: Command, prompt: PromptFunction) => {
  program
    .command('init') // new
    .description('Create a new sbstr8 project')
    .argument('<name>', 'Name of the project')
    .action(init(prompt));

  program
    .command('upgrade') // update
    .description('Rebase your project on the latest sbstr8 version')
    .action(upgrade(prompt));

  program
    .command('mount') // mount unionfs
    .description(
      'Mount unionfs to overlay your project on the latest sbstr8 version',
    )
    .action(mount(prompt));
};
