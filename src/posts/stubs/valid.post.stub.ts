import { Post } from '.prisma/client';

export const stubValidPost: Post = {
  id: 1,
  title: 'Valid post title',
  content: 'This is the content of the valid post stub.',
  authorId: 0,
  published: true,
};
