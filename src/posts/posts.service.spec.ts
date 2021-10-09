describe('PostsService', () => {
  describe('When getting a post', () => {
    describe('with a correct Id', () => {
      it.todo('should return the post');
    });

    describe('with an incorrect Id', () => {
      it.todo('should throw an error');
    });
  });

  describe('When getting posts', () => {
    describe('without filter', () => {
      it.todo('should return all posts');
    });

    describe('with specific filter', () => {
      it.todo('should return the correct posts');
    });
  });

  describe('Creating a post', () => {
    describe('with valid data', () => {
      it.todo('should create the post');
      it.todo('should return the created post');
    });

    describe('with invalid data', () => {
      it.todo('should not have created the post');
      it.todo('should throw an error');
    });
  });

  describe('Updating a post', () => {
    describe('with valid data', () => {
      it.todo('should update the database');
      it.todo('should return the updated post');
    });

    describe('with invalid data', () => {
      it.todo('should not have updated the post');
      it.todo('should throw an error');
    });
  });

  describe('Deleting a post', () => {
    describe('with valid data', () => {
      it.todo('should delete the post from the database');
      it.todo('should return the deleted post');
    });

    describe('with invalid data', () => {
      it.todo('should not have deleted the post');
      it.todo('should throw an error');
    });
  });
});
