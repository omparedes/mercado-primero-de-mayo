import { Component, HostListener, signal } from '@angular/core';
import {
  LucideArrowRight,
  LucideCalendarDays,
  LucideMapPin,
  LucideMenu,
  LucidePhone,
  LucideSparkles,
  LucideStore,
  LucideX,
} from '@lucide/angular';
import { GALLERY_ITEMS, GalleryItem, SITE_CONTENT } from './site-content';

@Component({
  selector: 'app-root',
  imports: [
    LucideArrowRight,
    LucideCalendarDays,
    LucideMapPin,
    LucideMenu,
    LucidePhone,
    LucideSparkles,
    LucideStore,
    LucideX,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly content = SITE_CONTENT;
  protected readonly galleryItems = GALLERY_ITEMS;
  protected readonly menuOpen = signal(false);
  protected readonly selectedImage = signal<GalleryItem | null>(null);

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  protected openImage(item: GalleryItem): void {
    this.selectedImage.set(item);
  }

  protected closeImage(): void {
    this.selectedImage.set(null);
  }

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    this.closeImage();
    this.closeMenu();
  }
}
