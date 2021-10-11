import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma.service';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { stubPublishedPost } from './stubs/published.post.stub';
import { stubUnpublishedPost } from './stubs/unpublished.post.stub';
import { stubValidPost } from './stubs/valid.post.stub';

describe('PostsController', () => {
  let postsController: PostsController;
  let postsService: PostsService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PostsController],
      providers: [PostsService, PrismaService],
    }).compile();

    postsController = app.get<PostsController>(PostsController);
    postsService = app.get<PostsService>(PostsService);
  });

  describe('GET /posts/:id', () => {
    describe('with a valid Id', () => {
      beforeEach(() => {
        jest.spyOn(postsService, 'post').mockResolvedValueOnce(stubValidPost);
      });

      it('should return the post with that Id', async () => {
        const post = await postsController.getPostById(
          String(stubValidPost.id),
        );

        expect(post).toEqual(stubValidPost);
      });
    });

    describe('with an invalid id', () => {
      beforeEach(() => {
        jest.spyOn(postsService, 'post').mockResolvedValueOnce(undefined);
      });

      it('should throw an error', async () => {
        expect(postsController.getPostById(String(-1))).rejects.toThrow();
      });
    });
  });

  describe('GET /posts/feed', () => {
    beforeEach(() => {
      jest.spyOn(postsService, 'posts').mockResolvedValueOnce([stubValidPost]);
    });

    it('should return an array of published posts', async () => {
      const feed = await postsController.getPublishedPosts();

      expect(feed).toEqual([stubValidPost]);
    });
  });

  describe('GET /posts/search/:query', () => {
    describe('with a query that can be found', () => {
      beforeEach(() => {
        jest
          .spyOn(postsService, 'posts')
          .mockResolvedValueOnce([stubValidPost]);
      });

      it('should return the posts containing the search query', async () => {
        const searchedPosts = await postsController.getSearchedPosts('');

        expect(searchedPosts).toEqual([stubValidPost]);
      });
    });

    describe('with a query that cannot be found', () => {
      beforeEach(() => {
        jest.spyOn(postsService, 'posts').mockResolvedValueOnce([]);
      });

      it('should return an empty array', async () => {
        const searchedPosts = await postsController.getSearchedPosts('');

        expect(searchedPosts).toEqual([]);
      });
    });
  });

  describe('POST /posts', () => {
    describe('with valid data', () => {
      beforeEach(() => {
        jest
          .spyOn(postsService, 'createPost')
          .mockResolvedValueOnce(stubUnpublishedPost);
      });

      it('should return the created post', async () => {
        const createdPost = await postsController.createDraft({
          title: stubUnpublishedPost.title,
          content: stubUnpublishedPost.content,
          authorEmail: '',
        });

        expect(createdPost).toEqual(stubUnpublishedPost);
      });
    });

    describe('with invalid data', () => {
      beforeEach(() => {
        jest.spyOn(postsService, 'createPost').mockResolvedValueOnce(undefined);
      });

      it('should throw an error', () => {
        expect(
          postsController.createDraft({ title: '', authorEmail: '' }),
        ).rejects.toThrow();
      });
    });
  });

  describe('PUT /posts/publish/:id', () => {
    describe('with a valid Id', () => {
      beforeEach(() => {
        jest
          .spyOn(postsService, 'updatePost')
          .mockResolvedValueOnce(stubPublishedPost);
      });

      it('should return the updated post', async () => {
        const publishedPost = await postsController.publishPost(
          String(stubPublishedPost.id),
        );

        expect(publishedPost).toEqual(publishedPost);
      });
    });

    describe('with an invalid Id', () => {
      beforeEach(() => {
        jest.spyOn(postsService, 'updatePost').mockResolvedValueOnce(undefined);
      });

      it('should throw an error', () => {
        expect(postsController.publishPost(String(1))).rejects.toThrow();
      });
    });
  });

  describe('DELETE /posts/:id', () => {
    describe('with a valid Id', () => {
      beforeEach(() => {
        jest
          .spyOn(postsService, 'deletePost')
          .mockResolvedValueOnce(stubValidPost);
      });

      it('should return the deleted post', async () => {
        const post = await postsController.deletePost(String(stubValidPost.id));

        expect(post).toEqual(stubValidPost);
      });
    });

    describe('with an invalid Id', () => {
      beforeEach(() => {
        jest.spyOn(postsService, 'deletePost').mockResolvedValueOnce(undefined);
      });

      it('should throw an error', () => {
        expect(postsController.deletePost(String(1))).rejects.toThrow();
      });
    });
  });
});
