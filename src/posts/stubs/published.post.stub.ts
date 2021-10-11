import { Post } from '.prisma/client';

export const stubPublishedPost: Post = {
  id: 2,
  title: 'Published post title',
  content: 'This is the content of the published post stub.',
  authorId: 0,
  published: true,
};
