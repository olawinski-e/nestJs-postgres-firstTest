import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from './article.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article)
    private readonly articleRepository: Repository<Article>,
  ) {}

  create(article: Article): Promise<Article> {
    return this.articleRepository.save(article);
  }

  findAll(): Promise<Article[]> {
    return this.articleRepository.find();
  }
}
