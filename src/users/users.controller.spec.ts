import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma.service';
import { stubValidUserSignup } from './stubs/valid.signup.stub';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let usersController: UsersController;
  let usersService: UsersService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService, PrismaService],
    }).compile();

    usersController = app.get<UsersController>(UsersController);
    usersService = app.get<UsersService>(UsersService);
  });

  describe('POST /users', () => {
    describe('with valid data', () => {
      beforeEach(() => {
        usersService.createUser = jest
          .fn()
          .mockReturnValueOnce(stubValidUserSignup);
      });

      it('should return the newly created user', async () => {
        const request = await usersController.signupUser(stubValidUserSignup);

        expect(request).toEqual(stubValidUserSignup);
      });
    });

    describe('with invalid data', () => {
      it.todo('should throw an error');
    });
  });
});
