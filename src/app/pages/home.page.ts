import { Component } from '@angular/core';
import {
  LucideArrowRight,
  LucideCalendarDays,
  LucideMapPin,
  LucidePhone,
  LucidePlay,
  LucideSparkles,
  LucideStore,
} from '@lucide/angular';
import { RouterLink } from '@angular/router';
import {
  FOUNDERS,
  GALLERY_ALBUMS,
  MARKET_VIDEOS,
  NEWS_ARTICLES,
} from '../site-content';
import { SITE_CONTENT } from '../site-shell-content';

@Component({
  selector: 'app-home-page',
  imports: [
    LucideArrowRight,
    LucideCalendarDays,
    LucideMapPin,
    LucidePhone,
    LucidePlay,
    LucideSparkles,
    LucideStore,
    RouterLink,
  ],
  templateUrl: './home.page.html',
})
export class HomePage {
  protected readonly content = SITE_CONTENT;
  protected readonly founders = FOUNDERS;
  protected readonly albums = GALLERY_ALBUMS;
  protected readonly latestNews = NEWS_ARTICLES.slice(0, 3);
  protected readonly featuredVideo = MARKET_VIDEOS[0];

  protected youtubeThumbnail(id: string): string {
    return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
  }
}
