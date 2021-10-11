import { Post } from '.prisma/client';

export const stubUnpublishedPost: Post = {
  id: 3,
  title: 'Unpublished post title',
  content: 'This is the content of the unpublished post stub.',
  authorId: 0,
  published: false,
};
