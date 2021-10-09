describe('UsersService', () => {
  describe('When getting a user', () => {
    describe('with a correct ID', () => {
      it.todo('should return the user');
    });

    describe('with an incorrect Id', () => {
      it.todo('should throw an error');
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
      it.todo('should throw an error');
    });
  });

  describe('Updating a user', () => {
    describe('with valid data', () => {
      it.todo('should update the database');
      it.todo('should return the updated user');
    });

    describe('with invalid data', () => {
      it.todo('should not have updated the user');
      it.todo('should throw an error');
    });
  });

  describe('Deleting a user', () => {
    describe('with valid data', () => {
      it.todo('should delete the user from the database');
      it.todo('should return the delete user');
    });

    describe('with invalid data', () => {
      it.todo('should not have deleted the user');
      it.todo('should throw an error');
    });
  });
});
