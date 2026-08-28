import { Component } from '@angular/core';
import { LucideArrowRight } from '@lucide/angular';
import { RouterLink } from '@angular/router';
import { NEWS_ARTICLES } from '../site-content';

@Component({
  selector: 'app-news-page',
  imports: [LucideArrowRight, RouterLink],
  templateUrl: './news.page.html',
})
export class NewsPage {
  protected readonly articles = NEWS_ARTICLES;
}
