export interface GameImage {
  src: string;
  alt: string;
}

export interface Game {
  slug: string;
  name: string;
  category: string;
  subcategory?: string;
  price: string;
  priceNumber: number;
  color: string;
  rating: number;
  reviewCount: number;
  players: string;
  playTime: string;
  age: string;
  complexity: number; // 1-5
  designer: string;
  publisher: string;
  year: number;
  description: string;
  longDescription: string;
  mechanics: string[];
  themes: string[];
  highlights: string[];
  images: GameImage[];
  expansions?: string[]; // slugs
  relatedSlugs: string[];
  inStock: boolean;
  isNew?: boolean;
  isBestseller?: boolean;
  rental?: {
    available: boolean; // can this game be rented at all?
    currentlyRented: boolean; // is it currently rented out?
  };
  transferDiscount?: boolean; // 10% off with bank transfer
}

export const games: Game[] = [
  {
    slug: "catan",
    name: "Catan",
    category: "Estrategia",
    subcategory: "Negociación",
    price: "$125.000",
    priceNumber: 125000,
    color: "from-amber-900/40 to-orange-900/20",
    rating: 4.8,
    reviewCount: 342,
    players: "3-4",
    playTime: "60-120 min",
    age: "10+",
    complexity: 2.3,
    designer: "Klaus Teuber",
    publisher: "DEVIR",
    year: 1995,
    description:
      "El clásico juego de colonización donde comerciás recursos, construís caminos y ciudades, y competís por dominar la isla de Catán.",
    longDescription: `Catán es el juego que revolucionó los juegos de mesa modernos. En cada partida, los jugadores asumen el rol de colonos que intentan establecerse en la isla de Catán.

Mediante la recolección y el comercio de recursos — madera, ladrillo, lana, trigo y mineral — construís caminos, asentamientos y ciudades para expandir tu territorio. Pero cuidado: el ladrón acecha, y tus oponentes también quieren los mejores territorios.

Lo que hace especial a Catán es su sistema de comercio: cada turno es una oportunidad para negociar con otros jugadores, creando alianzas temporales y rivalidades memorables. El tablero modular garantiza que cada partida sea única, y la combinación de estrategia, negociación y algo de suerte lo convierte en una experiencia accesible pero profunda.

Perfecto como puerta de entrada al mundo de los juegos de mesa modernos, Catán ha vendido más de 40 millones de copias en todo el mundo y sigue siendo un referente del género.`,
    mechanics: [
      "Gestión de recursos",
      "Comercio y negociación",
      "Colocación de dados",
      "Construcción de rutas",
      "Tablero modular",
    ],
    themes: ["Colonización", "Edad media", "Comercio"],
    highlights: [
      "Más de 40 millones de copias vendidas en el mundo",
      "Tablero modular: cada partida es diferente",
      "Sistema de comercio que fomenta la interacción",
      "Fácil de aprender, difícil de dominar",
      "Ideal para noches de juego con amigos",
    ],
    images: [
      { src: "/images/games/catan-1.jpg", alt: "Catan - tablero completo" },
      { src: "/images/games/catan-2.jpg", alt: "Catan - componentes" },
      { src: "/images/games/catan-3.jpg", alt: "Catan - partida en juego" },
      { src: "/images/games/catan-4.jpg", alt: "Catan - detalle de piezas" },
    ],
    expansions: ["catan-ciudades-y-caballeros", "catan-navegantes"],
    relatedSlugs: ["ticket-to-ride", "splendor"],
    inStock: true,
    isBestseller: true,
    rental: { available: true, currentlyRented: false },
    transferDiscount: true,
  },
  {
    slug: "ticket-to-ride",
    name: "Ticket to Ride",
    category: "Familiar",
    subcategory: "Colección de sets",
    price: "$98.000",
    priceNumber: 98000,
    color: "from-blue-900/40 to-cyan-900/20",
    rating: 4.7,
    reviewCount: 278,
    players: "2-5",
    playTime: "30-60 min",
    age: "8+",
    complexity: 1.8,
    designer: "Alan R. Moon",
    publisher: "Days of Wonder",
    year: 2004,
    description:
      "Reclamá rutas de tren a lo largo de América del Norte en este adictivo juego de recolección de cartas y planificación de rutas.",
    longDescription: `Ticket to Ride es una aventura ferroviaria que te lleva a través de América del Norte. Tu misión: conectar ciudades distantes completando rutas de tren antes que tus oponentes.

En cada turno tenés tres opciones simples: tomar cartas de tren, reclamar una ruta en el mapa colocando tus vagones, o tomar nuevas cartas de destino. La simplicidad de las reglas esconde una profundidad estratégica sorprendente: ¿bloqueás a tu rival o te concentrás en tus propias rutas? ¿Arriesgás con destinos largos o jugás seguro?

La tensión crece a medida que el tablero se llena y las rutas disponibles se reducen. Cada decisión cuenta, y el momento en que un rival reclama la ruta que necesitabas genera esos momentos memorables que definen las mejores noches de juego.

Con reglas que se explican en 15 minutos y partidas que duran alrededor de una hora, Ticket to Ride es el juego perfecto para toda la familia. Ha ganado el prestigioso Spiel des Jahres y es consistentemente uno de los juegos más vendidos del mundo.`,
    mechanics: [
      "Colección de sets",
      "Construcción de rutas",
      "Gestión de mano",
      "Push your luck",
    ],
    themes: ["Trenes", "Viajes", "Geografía"],
    highlights: [
      "Ganador del Spiel des Jahres 2004",
      "Reglas simples, se explica en 15 minutos",
      "Perfecto para toda la familia",
      "Alta rejugabilidad gracias a las cartas de destino",
      "Partidas rápidas de 30-60 minutos",
    ],
    images: [
      { src: "/images/games/ttr-1.jpg", alt: "Ticket to Ride - tablero" },
      { src: "/images/games/ttr-2.jpg", alt: "Ticket to Ride - cartas" },
      { src: "/images/games/ttr-3.jpg", alt: "Ticket to Ride - vagones" },
      { src: "/images/games/ttr-4.jpg", alt: "Ticket to Ride - partida" },
    ],
    relatedSlugs: ["catan", "splendor", "dixit"],
    inStock: true,
    isBestseller: true,
    rental: { available: true, currentlyRented: true },
    transferDiscount: true,
  },
  {
    slug: "pandemic",
    name: "Pandemic",
    category: "Cooperativo",
    subcategory: "Estrategia cooperativa",
    price: "$85.000",
    priceNumber: 85000,
    color: "from-red-900/40 to-rose-900/20",
    rating: 4.6,
    reviewCount: 215,
    players: "2-4",
    playTime: "45-60 min",
    age: "8+",
    complexity: 2.4,
    designer: "Matt Leacock",
    publisher: "Z-Man Games",
    year: 2008,
    description:
      "Trabajá en equipo para salvar al mundo de cuatro enfermedades mortales antes de que sea demasiado tarde.",
    longDescription: `En Pandemic, no competís contra otros jugadores — competís contra el juego mismo. Cuatro enfermedades mortales se están propagando por el mundo, y tu equipo de especialistas es la última esperanza de la humanidad.

Cada jugador asume un rol único con habilidades especiales: el Médico puede curar enfermedades más eficientemente, la Científica necesita menos cartas para encontrar curas, el Despachador puede mover a otros jugadores por el tablero. La clave del éxito está en combinar estas habilidades y coordinar acciones.

Pero el tiempo corre: cada turno, nuevas ciudades se infectan, y si no controlás los brotes, pueden desencadenar reacciones en cadena devastadoras. La tensión es palpable cuando el mazo de epidemias amenaza con desbordar una región que creías controlada.

Pandemic es una experiencia cooperativa por excelencia. Los debates sobre la mejor estrategia, los momentos de "¡lo logramos!" y las derrotas por un turno crean recuerdos que perduran. Es ideal para quienes buscan una experiencia de juego donde todos ganan o todos pierden juntos.`,
    mechanics: [
      "Cooperativo",
      "Gestión de acciones",
      "Colección de sets",
      "Control de área",
      "Poderes de jugador variables",
    ],
    themes: ["Ciencia", "Medicina", "Salvando al mundo"],
    highlights: [
      "Experiencia 100% cooperativa — todos ganan o pierden juntos",
      "Roles únicos con habilidades especiales",
      "Tensión creciente que mantiene a todos enganchados",
      "Escalabilidad de dificultad para todas las experiencias",
      "Base para una de las sagas más exitosas de juegos de mesa",
    ],
    images: [
      { src: "/images/games/pandemic-1.jpg", alt: "Pandemic - tablero mundial" },
      { src: "/images/games/pandemic-2.jpg", alt: "Pandemic - cartas de rol" },
      { src: "/images/games/pandemic-3.jpg", alt: "Pandemic - cubos de enfermedad" },
      { src: "/images/games/pandemic-4.jpg", alt: "Pandemic - partida cooperativa" },
    ],
    expansions: ["pandemic-al-limite", "pandemic-estado-de-emergencia"],
    relatedSlugs: ["terraforming-mars", "catan"],
    inStock: true,
    rental: { available: true, currentlyRented: false },
    transferDiscount: true,
  },
  {
    slug: "terraforming-mars",
    name: "Terraforming Mars",
    category: "Estrategia avanzada",
    subcategory: "Engine building",
    price: "$159.000",
    priceNumber: 159000,
    color: "from-orange-900/40 to-red-900/20",
    rating: 4.9,
    reviewCount: 189,
    players: "1-5",
    playTime: "120-180 min",
    age: "12+",
    complexity: 3.3,
    designer: "Jacob Fryxelius",
    publisher: "FryxGames",
    year: 2016,
    description:
      "Liderá una corporación en la carrera por terraformar Marte. Gestioná recursos, jugá proyectos y transformá el planeta rojo.",
    longDescription: `En el siglo XXV, la humanidad ha comenzado a terraformar Marte. Como líder de una corporación, tu objetivo es contribuir al proceso de terraformación mientras fortalecés tu economía y expandís tu influencia en el planeta rojo.

Terraforming Mars es una obra maestra del engine building. A lo largo de múltiples generaciones, jugás cartas de proyecto que representan tecnologías, infraestructuras y formas de vida que gradualmente transforman las condiciones de Marte: elevando la temperatura, creando océanos y aumentando el nivel de oxígeno.

Con más de 200 cartas de proyecto únicas, cada partida cuenta una historia diferente. ¿Te especializarás en energía verde? ¿En crear formas de vida marcianas? ¿En construir ciudades? Las posibilidades son enormes, y la satisfacción de ver cómo tu motor económico cobra vida es incomparable.

El juego combina gestión de recursos profunda con una temática científica fascinante. Las cartas están basadas en conceptos reales de terraformación, lo que hace que cada partida se sienta como una aventura de ciencia ficción dura. Para los amantes de la estrategia pesada, Terraforming Mars es simplemente imprescindible.`,
    mechanics: [
      "Engine building",
      "Gestión de recursos",
      "Draft de cartas",
      "Colocación de losetas",
      "Carreras de parámetros",
    ],
    themes: ["Ciencia ficción", "Marte", "Terraformación", "Corporaciones"],
    highlights: [
      "Más de 200 cartas de proyecto únicas",
      "Temática científica basada en conceptos reales",
      "Profundidad estratégica excepcional",
      "Modo solitario incluido",
      "Múltiples caminos hacia la victoria",
    ],
    images: [
      { src: "/images/games/tf-mars-1.jpg", alt: "Terraforming Mars - tablero" },
      { src: "/images/games/tf-mars-2.jpg", alt: "Terraforming Mars - cartas" },
      { src: "/images/games/tf-mars-3.jpg", alt: "Terraforming Mars - componentes" },
      { src: "/images/games/tf-mars-4.jpg", alt: "Terraforming Mars - partida" },
    ],
    expansions: ["terraforming-mars-preludio", "terraforming-mars-colonias"],
    relatedSlugs: ["pandemic", "splendor"],
    inStock: true,
    isNew: true,
    rental: { available: false, currentlyRented: false },
    transferDiscount: true,
  },
  {
    slug: "dixit",
    name: "Dixit",
    category: "Creativo",
    subcategory: "Party game",
    price: "$72.000",
    priceNumber: 72000,
    color: "from-purple-900/40 to-fuchsia-900/20",
    rating: 4.5,
    reviewCount: 196,
    players: "3-8",
    playTime: "30 min",
    age: "8+",
    complexity: 1.2,
    designer: "Jean-Louis Roubira",
    publisher: "Libellud",
    year: 2008,
    description:
      "Un juego de imaginación y creatividad donde tus palabras dan vida a ilustraciones oníricas y surrealistas.",
    longDescription: `Dixit es un juego que desafía tu creatividad e imaginación. Con cartas bellamente ilustradas por Marie Cardouat, cada turno te invita a inventar una frase, canción o sonido que describa tu carta — pero sin ser demasiado obvio ni demasiado críptico.

El narrador elige una carta de su mano y dice una frase inspirada en ella. Los demás jugadores eligen de sus propias manos la carta que mejor se ajuste a esa frase. Todas las cartas se mezclan y revelan, y los jugadores votan cuál creen que es la del narrador.

La genialidad de Dixit está en su sistema de puntuación: si todos adivinan tu carta, no ganás puntos. Si nadie la adivina, tampoco. La clave está en encontrar el equilibrio perfecto entre lo evidente y lo enigmático. Esto crea momentos mágicos donde una misma imagen evoca asociaciones completamente diferentes en cada persona.

Con arte que parece sacado de un sueño, Dixit es mucho más que un juego — es una ventana a la imaginación de las personas que querés. Perfecto para familias, parejas y grupos de amigos que buscan una experiencia diferente.`,
    mechanics: [
      "Storytelling",
      "Votación secreta",
      "Asociación de ideas",
      "Comunicación limitada",
    ],
    themes: ["Fantasía", "Arte", "Imaginación", "Surrealismo"],
    highlights: [
      "Ganador del Spiel des Jahres 2010",
      "Arte impresionante de Marie Cardouat",
      "Ideal para todas las edades y perfiles de jugador",
      "Fomenta la creatividad y la conexión entre personas",
      "Hasta 8 jugadores — perfecto para grupos grandes",
    ],
    images: [
      { src: "/images/games/dixit-1.jpg", alt: "Dixit - cartas ilustradas" },
      { src: "/images/games/dixit-2.jpg", alt: "Dixit - arte de cartas" },
      { src: "/images/games/dixit-3.jpg", alt: "Dixit - componentes" },
      { src: "/images/games/dixit-4.jpg", alt: "Dixit - jugando en grupo" },
    ],
    relatedSlugs: ["ticket-to-ride", "catan"],
    inStock: true,
    rental: { available: true, currentlyRented: false },
    transferDiscount: true,
  },
  {
    slug: "splendor",
    name: "Splendor",
    category: "Estrategia",
    subcategory: "Engine building",
    price: "$89.000",
    priceNumber: 89000,
    color: "from-emerald-900/40 to-teal-900/20",
    rating: 4.6,
    reviewCount: 231,
    players: "2-4",
    playTime: "30 min",
    age: "10+",
    complexity: 1.8,
    designer: "Marc André",
    publisher: "Space Cowboys",
    year: 2014,
    description:
      "Convertite en un mercader de gemas del Renacimiento. Coleccioná piedras preciosas, atraé nobles y construí tu imperio comercial.",
    longDescription: `Splendor te transporta al Renacimiento europeo, donde asumís el rol de un mercader de gemas que busca construir el imperio comercial más prestigioso. Con fichas de póker satisfactoriamente pesadas y cartas elegantemente ilustradas, el juego destila la esencia de la estrategia en una experiencia limpia y adictiva.

En cada turno, tenés opciones simples: tomar fichas de gemas, reservar una carta para comprarla después, o comprar una carta de desarrollo. Las cartas compradas te dan descuentos permanentes para futuras compras, creando un motor económico que se acelera a medida que avanza la partida.

Lo brillante de Splendor es cómo la simplicidad de las reglas esconde una profundidad táctica sorprendente. ¿Acumulás gemas rápido para bloquear a tu rival? ¿Te enfocás en atraer a un noble específico? ¿Reservás esa carta clave antes de que otro la compre?

Con partidas de 30 minutos y una curva de aprendizaje de apenas 5 minutos, Splendor es el juego perfecto para cualquier ocasión. Es el tipo de juego que terminás y decís "¿otra?". Ha ganado numerosos premios y es uno de los juegos más recomendados como segunda compra después de los clásicos.`,
    mechanics: [
      "Engine building",
      "Colección de sets",
      "Gestión de recursos",
      "Draft abierto",
    ],
    themes: ["Renacimiento", "Comercio", "Gemas", "Nobleza"],
    highlights: [
      "Fichas de gemas con peso real — satisfacción táctil",
      "Se aprende en 5 minutos, adictivo desde la primera partida",
      "Partidas rápidas de 30 minutos",
      "Profundidad estratégica en un formato compacto",
      "Nominado al Spiel des Jahres 2014",
    ],
    images: [
      { src: "/images/games/splendor-1.jpg", alt: "Splendor - fichas y cartas" },
      { src: "/images/games/splendor-2.jpg", alt: "Splendor - gemas" },
      { src: "/images/games/splendor-3.jpg", alt: "Splendor - tablero" },
      { src: "/images/games/splendor-4.jpg", alt: "Splendor - partida" },
    ],
    relatedSlugs: ["catan", "ticket-to-ride", "terraforming-mars"],
    inStock: true,
    isBestseller: true,
    rental: { available: true, currentlyRented: true },
    transferDiscount: true,
  },
];

export function getGameBySlug(slug: string): Game | undefined {
  return games.find((g) => g.slug === slug);
}

export function getRelatedGames(game: Game): Game[] {
  return game.relatedSlugs
    .map((s) => games.find((g) => g.slug === s))
    .filter((g): g is Game => g !== undefined);
}

export function getExpansionNames(game: Game): string[] {
  if (!game.expansions) return [];
  return game.expansions.map((slug) => {
    return slug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
  });
}

export function getGamesByCategory(category: string, excludeSlug?: string): Game[] {
  return games.filter(
    (g) => g.category === category && g.slug !== excludeSlug
  );
}
