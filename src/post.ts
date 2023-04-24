import { Command } from 'commander';

export const list = () => {
  console.log('TODO: list posts');
};

export const make = (slug: string) => {
  console.log(`TODO: make a new post with slug ${slug}`);
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
