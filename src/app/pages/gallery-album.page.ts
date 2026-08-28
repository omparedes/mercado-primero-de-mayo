import { Component, HostListener, computed, inject, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LucideArrowLeft, LucideX } from '@lucide/angular';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { GALLERY_ALBUMS, GalleryPhoto } from '../site-content';

@Component({
  selector: 'app-gallery-album-page',
  imports: [LucideArrowLeft, LucideX, RouterLink],
  templateUrl: './gallery-album.page.html',
})
export class GalleryAlbumPage {
  private readonly route = inject(ActivatedRoute);
  private readonly pageTitle = inject(Title);
  protected readonly album = GALLERY_ALBUMS.find((item) => item.slug === this.route.snapshot.paramMap.get('slug'));
  protected readonly visibleCount = signal(12);
  protected readonly selectedPhoto = signal<GalleryPhoto | null>(null);
  protected readonly visiblePhotos = computed(() => this.album?.photos.slice(0, this.visibleCount()) ?? []);

  constructor() {
    this.pageTitle.setTitle(
      this.album ? `${this.album.title} | Mercado Primero de Mayo` : 'Álbum no encontrado | Mercado Primero de Mayo',
    );
  }

  protected showMore(): void {
    this.visibleCount.update((count) => count + 12);
  }

  protected openPhoto(photo: GalleryPhoto): void {
    this.selectedPhoto.set(photo);
  }

  protected closePhoto(): void {
    this.selectedPhoto.set(null);
  }

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    this.closePhoto();
  }
}
