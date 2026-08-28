import { Component } from '@angular/core';
import { LucideArrowRight } from '@lucide/angular';
import { RouterLink } from '@angular/router';
import { GALLERY_ALBUMS } from '../site-content';

@Component({
  selector: 'app-gallery-page',
  imports: [LucideArrowRight, RouterLink],
  templateUrl: './gallery.page.html',
})
export class GalleryPage {
  protected readonly albums = GALLERY_ALBUMS;
  protected readonly photoCount = GALLERY_ALBUMS.reduce((total, album) => total + album.photos.length, 0);
}
