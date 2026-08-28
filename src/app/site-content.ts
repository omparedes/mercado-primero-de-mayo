export interface GalleryItem {
  readonly src: string;
  readonly alt: string;
  readonly label: string;
  readonly caption: string;
  readonly featured?: boolean;
}

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
    { label: 'Nuestra historia', href: '#historia' },
    { label: 'Fundadores', href: '#fundadores' },
    { label: 'Celebración', href: '#celebracion' },
    { label: 'Galería', href: '#galeria' },
    { label: 'Ubicación', href: '#ubicacion' },
  ],
} as const;

export const FOUNDERS: readonly string[] = [
  'Eliseo Quispe Miranda',
  'Walter Vilca M.',
  'Juana Surita Reyes',
  'Edilberto Yucra Alfaro',
  'Andres Campusano',
  'Julia Rocha C.',
  'Gerardo Cule R.',
  'Lidio Romero Isla',
  'Marin Minaya',
  'Olinda Falcon Ch.',
  'Ernestina Vara Castro',
  'Guillermo Carbajal C.',
  'Rosa Torres',
  'Victoria Salazar C.',
  'Lucia Esteban de Rosario',
  'Rosa Felicita Cute',
  'Felicita Alvarez de Ramirez',
  'Teófilo Rojas',
  'Maximiliana Atanacio',
  'Vicenta Cabrera de Velarde',
  'Vicente Vilca Mendez',
  'Emilia Alhuay de A.',
  'Crisóstomo Cerda',
  'María Velásquez de S.',
  'Bernardina Aguilar',
  'Dario Lizarraga B.',
  'Rita Abanto de R.',
  'Consuelo Soto Quispe',
  'Luisa Chiara',
  'Gerardo Delgado C.',
  'Julio Payet',
  'Constancia Cueto',
  'Paulina Yupanqui Rodas',
  'Fabian Mellque',
  'Josefa Becerra',
  'Samuel Oroya',
  'María Palomino Ch.',
  'David Rosario Loyola',
  'Gudelia Ventura R.',
  'Catalina Gutiérrez',
  'Antonio Rume A.',
  'Santiago Alhuay',
  'Clara Aguilar de H',
  'Ceferino Choque H.',
  'Griselda Mosquera',
  'Valentina Béjar A.',
  'Flor Falcón Ch',
  'Zoila Marcapura',
  'Olga Severick',
  'Victoria Flores G.',
  'Selustino Sallhue',
];

// Agrega nuevas fotos aquí. Los archivos deben ir en public/assets/galeria/.
export const GALLERY_ITEMS: readonly GalleryItem[] = [
  {
    src: 'assets/aniversario.jpg',
    alt: 'Afiche de las Bodas de Oro del Mercado Primero de Mayo',
    label: 'Bodas de Oro',
    caption: 'La invitación oficial a nuestra fiesta central por los 50 años.',
    featured: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=1000&q=85',
    alt: 'Puesto de frutas frescas en un mercado',
    label: 'Productos frescos',
    caption: 'Productos frescos y atención cercana para cada familia del distrito.',
  },
  {
    src: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1000&q=85',
    alt: 'Comerciante atendiendo su puesto',
    label: 'Nuestra gente',
    caption: 'El trabajo diario de quienes dan vida al Mercado Primero de Mayo.',
  },
];
