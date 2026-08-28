export interface GalleryPhoto {
  readonly src: string;
  readonly alt: string;
}

export interface GalleryAlbum {
  readonly slug: string;
  readonly eyebrow: string;
  readonly title: string;
  readonly description: string;
  readonly date: string;
  readonly cover: string;
  readonly coverAlt: string;
  readonly photos: readonly GalleryPhoto[];
}

export interface NewsArticle {
  readonly slug: string;
  readonly category: string;
  readonly title: string;
  readonly excerpt: string;
  readonly publishedAt: string;
  readonly image: string;
  readonly imageAlt: string;
  readonly body: readonly string[];
  readonly relatedAlbum?: string;
  readonly relatedVideo?: string;
}

export interface MarketVideo {
  readonly youtubeId: string;
  readonly title: string;
  readonly category: 'Homenajes' | 'Novenas y tradición' | 'Actividades con clientes';
  readonly format: 'Video' | 'Short';
}

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

const createPhotos = (folder: string, prefix: string, count: number, alt: string): readonly GalleryPhoto[] =>
  Array.from({ length: count }, (_, index) => ({
    src: `assets/galeria/${folder}/${prefix}-${String(index + 1).padStart(2, '0')}.jpeg`,
    alt: `${alt}, fotografía ${index + 1}`,
  }));

const bagPhotos = createPhotos(
  'entrega-bolsas',
  'bolsas',
  29,
  'Entrega de bolsas conmemorativas a clientes del Mercado Primero de Mayo',
);

const novenaPhotos = createPhotos(
  'novenas',
  'novena',
  6,
  'Novenas por el 50 aniversario del Mercado Primero de Mayo',
);

export const GALLERY_ALBUMS: readonly GalleryAlbum[] = [
  {
    slug: 'entrega-bolsas-50-aniversario',
    eyebrow: 'Gracias por elegirnos',
    title: 'Entrega de bolsas por los 50 años',
    description:
      'Hoy se premia a los clientes por su confianza y fidelidad. El Consejo de Administración recorrió nuestros puestos para compartir este recuerdo con quienes nos acompañan cada día.',
    date: '27 de agosto de 2026',
    cover: bagPhotos[2].src,
    coverAlt: 'Entrega de una bolsa verde conmemorativa por los 50 años del mercado',
    photos: bagPhotos,
  },
  {
    slug: 'novenas-50-aniversario',
    eyebrow: 'Fe y comunidad',
    title: 'Novenas del 50 aniversario',
    description:
      'Los giros del mercado se organizaron para compartir nueve jornadas de oración, encuentro y gratitud en honor a Santa Rosa de Lima.',
    date: 'Del 20 al 28 de agosto de 2026',
    cover: novenaPhotos[2].src,
    coverAlt: 'Socios y clientes reunidos durante una novena en el mercado',
    photos: novenaPhotos,
  },
  {
    slug: 'momentos-del-aniversario',
    eyebrow: 'La alegría del mercado',
    title: 'Bruno también celebra con nosotros',
    description:
      'Bruno, la mascota del mercado, se sumó a la celebración de nuestras Bodas de Oro rodeado de los colores verde y dorado que nos identifican.',
    date: 'Agosto de 2026',
    cover: 'assets/historias/bruno-aniversario.jpeg',
    coverAlt: 'Bruno, la mascota del mercado, descansando junto a globos verdes y dorados',
    photos: [
      {
        src: 'assets/historias/bruno-aniversario.jpeg',
        alt: 'Bruno, la mascota del Mercado Primero de Mayo, junto a globos verdes y dorados',
      },
    ],
  },
];

export const NEWS_ARTICLES: readonly NewsArticle[] = [
  {
    slug: 'show-infantil-50-aniversario',
    category: 'Agenda',
    title: 'Show infantil por los 50 años del mercado',
    excerpt:
      'El Consejo de Administración invita a las familias a compartir una tarde de diversión, risas y magia para los más pequeños.',
    publishedAt: '28 de agosto de 2026',
    image: 'assets/eventos/show-infantil-2026.jpeg',
    imageAlt: 'Invitación al show infantil del Mercado Primero de Mayo',
    body: [
      'El Mercado Cooperativo Primero de Mayo continúa celebrando sus Bodas de Oro junto a las familias de San Juan de Miraflores.',
      'El Consejo de Administración invita al show infantil que se realizará el 29 de agosto a las 5:00 p. m. en el segundo piso del mercado, ubicado en la avenida Vargas Machuca 306.',
      'Será una tarde preparada especialmente para nuestros pequeños, con diversión, risas y mucha magia. Los esperamos para seguir celebrando juntos estos 50 años de confianza y desarrollo.',
    ],
  },
  {
    slug: 'bolsas-conmemorativas-para-nuestros-clientes',
    category: 'Aniversario',
    title: 'Bolsas conmemorativas para nuestros clientes',
    excerpt:
      'Hoy se premia a los clientes por su confianza y fidelidad, agradeciendo a quienes eligen diariamente a nuestros comerciantes.',
    publishedAt: '27 de agosto de 2026',
    image: bagPhotos[2].src,
    imageAlt: 'Entrega de una bolsa conmemorativa a una clienta del mercado',
    body: [
      'Hoy se premia a los clientes por su confianza y fidelidad. Como parte de las actividades por nuestro 50 aniversario, el Consejo de Administración realizó la entrega de bolsas conmemorativas a quienes nos visitan y realizan sus compras en el mercado.',
      'Este presente representa nuestro agradecimiento por cinco décadas de cercanía. Cada visita sostiene el trabajo de nuestros socios y fortalece el comercio local de San Juan de Miraflores.',
      'Seguiremos trabajando para ofrecer una atención cercana, productos de calidad y un mercado que continúe creciendo junto a su comunidad.',
    ],
    relatedAlbum: 'entrega-bolsas-50-aniversario',
  },
  {
    slug: 'novenas-por-nuestro-50-aniversario',
    category: 'Tradición',
    title: 'Los giros se unen en las novenas del aniversario',
    excerpt:
      'Del 20 al 28 de agosto, los diferentes giros del mercado comparten jornadas de oración y confraternidad en honor a Santa Rosa de Lima.',
    publishedAt: '20 de agosto de 2026',
    image: novenaPhotos[2].src,
    imageAlt: 'Celebración de una novena por el aniversario del mercado',
    body: [
      'La fe también forma parte de nuestra historia. Los giros del Mercado Cooperativo Primero de Mayo se organizaron para realizar las novenas por el 50 aniversario y en honor a Santa Rosa de Lima.',
      'Cada jornada reúne a socios, comerciantes, clientes y vecinos en un espacio de oración y encuentro. Al finalizar, los giros comparten alimentos como gesto de agradecimiento a quienes participan.',
      'Las novenas se desarrollan del 20 al 28 de agosto desde las 4:00 p. m., fortaleciendo la unión que ha acompañado al mercado durante estas cinco décadas.',
    ],
    relatedAlbum: 'novenas-50-aniversario',
    relatedVideo: '5abO-29luyk',
  },
  {
    slug: 'homenaje-a-nuestros-socios-fundadores',
    category: 'Historia',
    title: 'Homenaje a nuestros socios fundadores',
    excerpt:
      'Recordamos a las 51 personas que lucharon por el terreno, la construcción y la formación de nuestra cooperativa.',
    publishedAt: '28 de agosto de 2026',
    image: 'assets/aniversario.jpg',
    imageAlt: 'Afiche de las Bodas de Oro del Mercado Primero de Mayo',
    body: [
      'La historia del Mercado Cooperativo Primero de Mayo comenzó con el esfuerzo de 51 socios fundadores que se organizaron para conseguir el terreno e iniciar la construcción de un espacio para sus familias y su comunidad.',
      'A quienes continúan con nosotros y a quienes ya partieron, les expresamos nuestro respeto y gratitud. Su trabajo hizo posible que hoy celebremos 50 años de servicio y vida cooperativa.',
      'El mercado conserva sus nombres como parte esencial de su memoria y comparte este homenaje para que las nuevas generaciones conozcan el origen de nuestra institución.',
    ],
    relatedVideo: 'a2Z5nirC-O4',
  },
];

export const MARKET_VIDEOS: readonly MarketVideo[] = [
  { youtubeId: 'a2Z5nirC-O4', title: 'Homenaje Socios Fundadores', category: 'Homenajes', format: 'Video' },
  { youtubeId: 'wTnCdGhXXPI', title: 'Regalo a nuestros clientes', category: 'Actividades con clientes', format: 'Short' },
  { youtubeId: '-gPv3aiPnUs', title: 'Regalo a nuestros clientes', category: 'Actividades con clientes', format: 'Short' },
  { youtubeId: 'a7EwDUSAMmw', title: 'Regalo a nuestros clientes', category: 'Actividades con clientes', format: 'Short' },
  { youtubeId: 'ulkFB7JNAg4', title: 'Regalo a nuestros clientes', category: 'Actividades con clientes', format: 'Short' },
  { youtubeId: 'T3F36qptWqU', title: 'Poesía a la Virgen Santa Rosa de Lima', category: 'Novenas y tradición', format: 'Short' },
  { youtubeId: 'GueGzVvDLfQ', title: 'Novena del Mercado Primero de Mayo', category: 'Novenas y tradición', format: 'Short' },
  { youtubeId: '1W3BI-tFXUQ', title: 'Novena del Mercado Primero de Mayo', category: 'Novenas y tradición', format: 'Short' },
  { youtubeId: 'na_aGdAW6Wg', title: 'Novena del Mercado Primero de Mayo', category: 'Novenas y tradición', format: 'Short' },
  { youtubeId: 'ts4quLy7daI', title: 'Novena del Mercado Primero de Mayo', category: 'Novenas y tradición', format: 'Short' },
  { youtubeId: '2ui-KrkoP9E', title: 'Novena del Mercado Primero de Mayo', category: 'Novenas y tradición', format: 'Short' },
  { youtubeId: '5abO-29luyk', title: 'Inicio de la Novena', category: 'Novenas y tradición', format: 'Short' },
];
