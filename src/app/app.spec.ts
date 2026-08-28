import { provideRouter } from '@angular/router';
import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { routes } from './app.routes';
import { FOUNDERS, GALLERY_ALBUMS, MARKET_VIDEOS, NEWS_ARTICLES } from './site-content';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('creates the application shell and primary navigation', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(fixture.componentInstance).toBeTruthy();
    expect(compiled.querySelector('.brand')?.textContent).toContain('Mercado Cooperativo');
    expect(compiled.querySelectorAll('.desktop-nav a')).toHaveLength(5);
  });

  it('provides the complete first-phase content', () => {
    expect(FOUNDERS).toHaveLength(51);
    expect(GALLERY_ALBUMS).toHaveLength(3);
    expect(GALLERY_ALBUMS[0].photos).toHaveLength(29);
    expect(GALLERY_ALBUMS[1].photos).toHaveLength(6);
    expect(NEWS_ARTICLES).toHaveLength(4);
    expect(MARKET_VIDEOS).toHaveLength(12);
  });
});
