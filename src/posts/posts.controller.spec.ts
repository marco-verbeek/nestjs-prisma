describe('PostsController', () => {
  describe('GET /posts/:id', () => {
    describe('with a valid Id', () => {
      it.todo('should return the post with that Id');
    });

    describe('with an invalid id', () => {
      it.todo('should throw an error');
    });
  });

  describe('GET /posts/feed', () => {
    it.todo('should return an array of published posts');
  });

  describe('GET /posts/search/:query', () => {
    describe('with a query that can be found', () => {
      it.todo('should return the posts containing the search query');
    });

    describe('with a query that cannot be found', () => {
      it.todo('should return an empty array');
    });
  });

  describe('POST /posts', () => {
    describe('with valid data', () => {
      it.todo('should return the created post');
    });

    describe('with invalid data', () => {
      it.todo('should throw an error');
    });
  });

  describe('PUT /posts/publish/:id', () => {
    describe('with a valid Id', () => {
      it.todo('should return the updated post');
    });

    describe('with an invalid Id', () => {
      it.todo('should throw an error');
    });
  });

  describe('DELETE /posts/:id', () => {
    describe('with a valid Id', () => {
      it.todo('should return the deleted post');
    });

    describe('with an invalid Id', () => {
      it.todo('should throw an error');
    });
  });
});
