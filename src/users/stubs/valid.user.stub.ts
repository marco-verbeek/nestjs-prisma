import { User } from '.prisma/client';

export const stubValidUser: User = {
  id: 1,
  email: 'user1@test.com',
  name: 'user1',
};
