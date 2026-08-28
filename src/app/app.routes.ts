import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home.page').then((page) => page.HomePage),
    title: 'Mercado Cooperativo Primero de Mayo',
  },
  {
    path: 'noticias',
    loadComponent: () => import('./pages/news.page').then((page) => page.NewsPage),
    title: 'Noticias | Mercado Primero de Mayo',
  },
  {
    path: 'noticias/:slug',
    loadComponent: () => import('./pages/news-article.page').then((page) => page.NewsArticlePage),
  },
  {
    path: 'galeria',
    loadComponent: () => import('./pages/gallery.page').then((page) => page.GalleryPage),
    title: 'Galería | Mercado Primero de Mayo',
  },
  {
    path: 'galeria/:slug',
    loadComponent: () => import('./pages/gallery-album.page').then((page) => page.GalleryAlbumPage),
  },
  {
    path: 'videos',
    loadComponent: () => import('./pages/videos.page').then((page) => page.VideosPage),
    title: 'Videos | Mercado Primero de Mayo',
  },
  { path: '**', redirectTo: '' },
];
