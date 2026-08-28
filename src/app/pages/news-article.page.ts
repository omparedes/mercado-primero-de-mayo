import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LucideArrowLeft, LucideArrowRight, LucidePlay } from '@lucide/angular';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { GALLERY_ALBUMS, NEWS_ARTICLES } from '../site-content';

@Component({
  selector: 'app-news-article-page',
  imports: [LucideArrowLeft, LucideArrowRight, LucidePlay, RouterLink],
  templateUrl: './news-article.page.html',
})
export class NewsArticlePage {
  private readonly route = inject(ActivatedRoute);
  private readonly pageTitle = inject(Title);
  protected readonly article = NEWS_ARTICLES.find((item) => item.slug === this.route.snapshot.paramMap.get('slug'));
  protected readonly relatedAlbum = this.article?.relatedAlbum
    ? GALLERY_ALBUMS.find((album) => album.slug === this.article?.relatedAlbum)
    : undefined;

  constructor() {
    this.pageTitle.setTitle(
      this.article ? `${this.article.title} | Mercado Primero de Mayo` : 'Noticia no encontrada | Mercado Primero de Mayo',
    );
  }

  protected youtubeThumbnail(id: string): string {
    return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
  }
}
