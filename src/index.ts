const { Command } = require('commander');
const figlet = require('figlet');
const pkg = require('../package.json');

const program = new Command();

const name = pkg.name;
program
  .name(name)
  .version('0.0.1')
  .description('Substrate CLI')
  .command('new') // new
  .description('Create a new Substrate project')
  .argument('<name>', 'Name of the project')
  .action((projectName: string) => {
    console.log(`Creating new project ${projectName}`);
  })
  .command('update') // update
  .description('Rebase your project on the latest Substrate version')
  .action(() => {
    console.log(`Updating ${name}`);
  });

console.log(
  figlet.textSync('Substrate', {
    font: 'Script',
  }),
);
program.parse();
