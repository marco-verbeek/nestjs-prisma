import { User } from '.prisma/client';

export const stubValidUserSignup: User = {
  id: 1,
  email: 'test@test.com',
  name: 'test',
};
