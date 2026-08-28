export const SITE_CONTENT = {
  name: 'Mercado Cooperativo Primero de Mayo',
  shortName: 'Primero de Mayo',
  anniversary: '50',
  founded: '1976',
  address: 'Av. Vargas Machuca 306, Zona B',
  district: 'San Juan de Miraflores, Lima',
  mapsUrl:
    'https://www.google.com/maps/search/Av.+Vargas+Machuca+306+San+Juan+de+Miraflores',
  nav: [
    { label: 'Historia', route: '/', fragment: 'historia' },
    { label: 'Fundadores', route: '/', fragment: 'fundadores' },
    { label: 'Noticias', route: '/noticias', fragment: null },
    { label: 'Galería', route: '/galeria', fragment: null },
    { label: 'Videos', route: '/videos', fragment: null },
  ],
} as const;
