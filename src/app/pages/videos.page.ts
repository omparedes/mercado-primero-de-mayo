import { Component, HostListener, inject, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { LucidePlay, LucideX } from '@lucide/angular';
import { MARKET_VIDEOS, MarketVideo } from '../site-content';

@Component({
  selector: 'app-videos-page',
  imports: [LucidePlay, LucideX],
  templateUrl: './videos.page.html',
})
export class VideosPage {
  private readonly sanitizer = inject(DomSanitizer);
  protected readonly videos = MARKET_VIDEOS;
  protected readonly categories = ['Homenajes', 'Novenas y tradición', 'Actividades con clientes'] as const;
  protected readonly selectedVideo = signal<MarketVideo | null>(null);
  protected readonly playerUrl = signal<SafeResourceUrl | null>(null);

  protected videosFor(category: MarketVideo['category']): readonly MarketVideo[] {
    return this.videos.filter((video) => video.category === category);
  }

  protected youtubeThumbnail(id: string): string {
    return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
  }

  protected openVideo(video: MarketVideo): void {
    this.selectedVideo.set(video);
    this.playerUrl.set(
      this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`,
      ),
    );
  }

  protected closeVideo(): void {
    this.selectedVideo.set(null);
    this.playerUrl.set(null);
  }

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    this.closeVideo();
  }
}
