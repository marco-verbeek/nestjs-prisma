import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma.service';
import { stubValidUser } from './stubs/valid.user.stub';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let usersService: UsersService;

  let mockedPrismaService = {
    user: {
      findUnique: jest.fn(),
      findMany: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
  };

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        { provide: PrismaService, useValue: mockedPrismaService },
      ],
    }).compile();

    usersService = app.get<UsersService>(UsersService);
  });

  describe('When getting a user', () => {
    describe('with a correct Id', () => {
      beforeAll(() => {
        mockedPrismaService.user.findUnique = jest
          .fn()
          .mockResolvedValue(stubValidUser);
      });

      it('should return the user', async () => {
        const user = await usersService.user({ id: stubValidUser.id });
        expect(user).toEqual(stubValidUser);
      });
    });

    describe('with an incorrect Id', () => {
      beforeAll(() => {
        mockedPrismaService.user.findUnique = jest
          .fn()
          .mockResolvedValue(undefined);
      });

      it('should return undefined', async () => {
        const user = await usersService.user({ id: -1 });
        expect(user).toEqual(undefined);
      });
    });
  });

  describe('When getting users', () => {
    describe('without filter', () => {
      it.todo('should return all users');
    });

    describe('with specific filter', () => {
      it.todo('should return the correct users');
    });
  });

  describe('Creating a user', () => {
    describe('with valid data', () => {
      it.todo('should create the user');
      it.todo('should return the created user');
    });

    describe('with invalid data', () => {
      it.todo('should not have created the user');
      it.todo('should return undefined');
    });
  });

  describe('Updating a user', () => {
    describe('with valid data', () => {
      it.todo('should update the database');
      it.todo('should return the updated user');
    });

    describe('with invalid data', () => {
      it.todo('should not have updated the user');
      it.todo('should return undefined');
    });
  });

  describe('Deleting a user', () => {
    describe('with valid data', () => {
      it.todo('should delete the user from the database');
      it.todo('should return the deleted user');
    });

    describe('with invalid data', () => {
      it.todo('should not have deleted the user');
      it.todo('should return undefined');
    });
  });
});
