import { Command } from 'commander';
import inquirer from 'inquirer';

export const list = () => {
  console.log('TODO: list posts');
};

export const make = async (slug: string) => {
  const answers = await inquirer.prompt(['foo']);
  console.log(answers, slug);
};

export const edit = (slug: string) => {
  console.log(`TODO: edit a post with slug ${slug}`);
};

export const remove = (slug: string) => {
  console.log(`TODO: remove a post with slug ${slug}`);
};

export default (program: Command) => {
  const post = program
    .command('post') // update
    .description('list, make, edit, and remove posts');

  post.command('ls').description('list all posts').action(list);

  post
    .command('mk')
    .description('make new post')
    .argument('<slug>', 'slug of post (e.g. http://some.domain/post/<slug>/)')
    .action(make);

  post
    .command('ed')
    .description('edit a post')
    .argument('<slug>', 'slug of post (e.g. http://some.domain/post/<slug>/)')
    .action(edit);

  post
    .command('rm')
    .description('remove a post')
    .argument('<slug>', 'slug of post (e.g. http://some.domain/post/<slug>/)')
    .action(remove);
};
