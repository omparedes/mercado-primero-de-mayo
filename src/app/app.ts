import { Component, HostListener, signal } from '@angular/core';
import { LucideMenu, LucideX } from '@lucide/angular';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SITE_CONTENT } from './site-shell-content';

@Component({
  selector: 'app-root',
  imports: [LucideMenu, LucideX, RouterLink, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly content = SITE_CONTENT;
  protected readonly menuOpen = signal(false);

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    this.closeMenu();
  }
}
