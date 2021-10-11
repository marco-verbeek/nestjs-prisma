import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post as PostModel } from '@prisma/client';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get('feed')
  async getPublishedPosts(): Promise<PostModel[]> {
    return this.postsService.posts({ where: { published: true } });
  }

  @Get(':id')
  async getPostById(@Param('id') id: string): Promise<PostModel> {
    const post = await this.postsService.post({ id: Number(id) });

    if (post) return post;

    throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
  }

  @Get('search/:query')
  async getSearchedPosts(@Param('query') query: string): Promise<PostModel[]> {
    return this.postsService.posts({
      where: {
        OR: [{ title: { contains: query } }, { content: { contains: query } }],
      },
    });
  }

  @Post()
  async createDraft(
    @Body() postData: { title: string; content?: string; authorEmail: string },
  ): Promise<PostModel> {
    const { title, content, authorEmail } = postData;

    const createdPost = await this.postsService.createPost({
      title,
      content,
      author: { connect: { email: authorEmail } },
    });

    if (createdPost) return createdPost;

    throw new HttpException(
      'Could not create draft post',
      HttpStatus.BAD_REQUEST,
    );
  }

  @Put('publish/:id')
  async publishPost(@Param('id') id: string): Promise<PostModel> {
    const post = await this.postsService.updatePost({
      where: { id: Number(id) },
      data: { published: true },
    });

    if (post && post.published) return post;

    throw new HttpException('Could not publish post', HttpStatus.BAD_REQUEST);
  }

  @Delete(':id')
  async deletePost(@Param('id') id: string): Promise<PostModel> {
    const post = await this.postsService.deletePost({ id: Number(id) });

    if (post) return post;

    throw new HttpException('Could not delete post', HttpStatus.BAD_REQUEST);
  }
}
