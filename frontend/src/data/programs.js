// Centralized program data — source of truth: Flight Master Project Plan (via project brief).
// Statuses are honest: only core services are "available". No prices anywhere.
export const STATUS = {
  AVAILABLE: "available",
  IN_DEV: "inDevelopment",
  PLANNED: "planned",
  UNDER_REVIEW: "underReview",
};

const d = (en, es) => ({ en, es });

export const programs = [
  {
    id: "foundation",
    core: true,
    status: STATUS.AVAILABLE,
    duration: null,
    name: d("Foundation", "Foundation"),
    tagline: d(
      "Fundamentals of jumping and explosiveness.",
      "Fundamentos del salto y la explosividad."
    ),
    overview: d(
      "The entry pathway of the Flight Academy. Foundation builds the fundamentals of jumping and explosiveness: how you move, how you produce force and how those fundamentals carry into sport and dunking.",
      "El camino de entrada de Flight Academy. Foundation construye los fundamentos del salto y la explosividad: cómo te mueves, cómo produces fuerza y cómo esos fundamentos se trasladan al deporte y al mate."
    ),
    audience: d(
      "Athletes starting structured jump training, whatever their current level.",
      "Atletas que inician un entrenamiento de salto estructurado, sea cual sea su nivel actual."
    ),
    focus: d(
      "Jump fundamentals, explosiveness, movement quality.",
      "Fundamentos del salto, explosividad, calidad de movimiento."
    ),
    format: d(
      "Structured training pathway with individual guidance.",
      "Camino de entrenamiento estructurado con guía individual."
    ),
  },
  {
    id: "flight-levels",
    core: true,
    status: STATUS.AVAILABLE,
    duration: null,
    name: d("Flight Levels", "Flight Levels"),
    tagline: d(
      "A structured progression through different stages of athletic and dunk development.",
      "Una progresión estructurada por distintas etapas del desarrollo atlético y del mate."
    ),
    overview: d(
      "The backbone of the Academy. Flight Levels places every athlete on a clear progression — from first fundamentals to advanced dunking — with defined stages and honest milestones along the way.",
      "La columna vertebral de la Academy. Flight Levels sitúa a cada atleta en una progresión clara — desde los primeros fundamentos hasta el mate avanzado — con etapas definidas e hitos honestos."
    ),
    audience: d(
      "Any athlete who wants a defined path: from beginners to advanced dunkers.",
      "Cualquier atleta que quiera un camino definido: de principiantes a matadores avanzados."
    ),
    focus: d(
      "Staged progression through athletic and dunk development.",
      "Progresión por etapas del desarrollo atlético y del mate."
    ),
    format: d(
      "Level-based structured progression, guided by assessment.",
      "Progresión estructurada por niveles, guiada por evaluación."
    ),
    hasLevels: true,
  },
  {
    id: "personalized-flight",
    core: true,
    status: STATUS.AVAILABLE,
    duration: null,
    name: d("Personalized Flight", "Personalized Flight"),
    tagline: d("Premium individual coaching.", "Coaching individual premium."),
    overview: d(
      "The premium individual coaching pathway. Personalized Flight builds training around one athlete: their goals, their level and their appropriate progression, guided directly over time.",
      "El camino de coaching individual premium. Personalized Flight construye el entrenamiento sobre un solo atleta: sus objetivos, su nivel y su progresión adecuada, guiados directamente con el tiempo."
    ),
    audience: d(
      "Athletes who want direct, individual guidance on their specific progression.",
      "Atletas que quieren guía directa e individual sobre su progresión concreta."
    ),
    focus: d(
      "Individual goals, appropriate progression, direct guidance.",
      "Objetivos individuales, progresión adecuada, guía directa."
    ),
    format: d(
      "Personalized coaching with direct work alongside Flight.",
      "Coaching personalizado con trabajo directo junto a Flight."
    ),
  },
  {
    id: "flight-test",
    core: true,
    status: STATUS.AVAILABLE,
    duration: null,
    name: d("Flight Test", "Flight Test"),
    tagline: d("A free in-person assessment.", "Una evaluación presencial gratuita."),
    overview: d(
      "The free starting point of the Academy. Flight Test is an in-person assessment that helps the athlete — and Flight — understand the current level and identify the most appropriate next step.",
      "El punto de partida gratuito de la Academy. Flight Test es una evaluación presencial que ayuda al atleta —y a Flight— a entender el nivel actual e identificar el siguiente paso más adecuado."
    ),
    audience: d(
      "Any athlete beginning with Flight who wants an honest read of their current level.",
      "Cualquier atleta que empieza con Flight y quiere una lectura honesta de su nivel actual."
    ),
    focus: d(
      "Understanding current level and identifying an appropriate pathway.",
      "Entender el nivel actual e identificar el camino adecuado."
    ),
    format: d("Free in-person assessment.", "Evaluación presencial gratuita."),
  },
  {
    id: "consultation",
    core: true,
    status: STATUS.AVAILABLE,
    duration: d("15–30 minutes", "15–30 minutos"),
    name: d("Consultation", "Consulta"),
    tagline: d(
      "A focused consultation lasting 15–30 minutes.",
      "Una consulta enfocada de 15–30 minutos."
    ),
    overview: d(
      "A focused session for a specific question: your current situation, a decision about your training, or the right pathway inside the ecosystem. Short, direct and honest.",
      "Una sesión enfocada para una pregunta concreta: tu situación actual, una decisión sobre tu entrenamiento o el camino adecuado dentro del ecosistema. Corta, directa y honesta."
    ),
    audience: d(
      "Athletes or families with a specific question before committing to a pathway.",
      "Atletas o familias con una pregunta concreta antes de comprometerse con un camino."
    ),
    focus: d(
      "Focused guidance on a specific situation or decision.",
      "Guía enfocada sobre una situación o decisión concreta."
    ),
    format: d("One-to-one consultation session.", "Sesión de consulta uno a uno."),
  },
  {
    id: "flight-camps",
    core: true,
    status: STATUS.AVAILABLE,
    duration: null,
    name: d("Flight Camps", "Flight Camps"),
    tagline: d(
      "In-person jump and dunk training experiences.",
      "Experiencias presenciales de entrenamiento de salto y mate."
    ),
    overview: d(
      "Flight Camps bring the Academy onto the court: in-person training experiences built around jump technique, dunk progression and individual attention. Dates and locations are announced when confirmed.",
      "Flight Camps lleva la Academy a la cancha: experiencias de entrenamiento presenciales construidas sobre técnica de salto, progresión de mates y atención individual. Fechas y sedes se anuncian cuando se confirman."
    ),
    audience: d(
      "Athletes who want to train jump and dunk skills in person, together.",
      "Atletas que quieren entrenar salto y mate en persona, en grupo."
    ),
    focus: d("Jump and dunk training on the court.", "Entrenamiento de salto y mate en la cancha."),
    format: d("In-person camps and clinics.", "Campamentos y clínicas presenciales."),
  },

  // ---- Programs in development ----
  {
    id: "one-foot-jumper",
    core: false,
    status: STATUS.IN_DEV,
    duration: d("12-week track", "Pista de 12 semanas"),
    name: d("One-Foot Jumper", "One-Foot Jumper"),
    tagline: d("A 12-week track for one-foot jumpers.", "Una pista de 12 semanas para saltadores de un pie."),
    overview: d(
      "A dedicated 12-week track for athletes who take off from one foot. In development — details will be published when confirmed.",
      "Una pista dedicada de 12 semanas para atletas que despegan de un pie. En desarrollo — los detalles se publicarán cuando estén confirmados."
    ),
    audience: d("One-foot takeoff jumpers.", "Saltadores con despegue de un pie."),
    focus: d("One-foot jumping development.", "Desarrollo del salto de un pie."),
    format: d("12-week training track.", "Pista de entrenamiento de 12 semanas."),
  },
  {
    id: "two-foot-jumper",
    core: false,
    status: STATUS.IN_DEV,
    duration: d("12-week track", "Pista de 12 semanas"),
    name: d("Two-Foot Jumper", "Two-Foot Jumper"),
    tagline: d("A 12-week track for two-foot jumpers.", "Una pista de 12 semanas para saltadores de dos pies."),
    overview: d(
      "A dedicated 12-week track for athletes who take off from two feet. In development — details will be published when confirmed.",
      "Una pista dedicada de 12 semanas para atletas que despegan de dos pies. En desarrollo — los detalles se publicarán cuando estén confirmados."
    ),
    audience: d("Two-foot takeoff jumpers.", "Saltadores con despegue de dos pies."),
    focus: d("Two-foot jumping development.", "Desarrollo del salto de dos pies."),
    format: d("12-week training track.", "Pista de entrenamiento de 12 semanas."),
  },
  {
    id: "power-generation",
    core: false,
    status: STATUS.PLANNED,
    duration: d("Planned 12-week track", "Pista planificada de 12 semanas"),
    name: d("Power Generation", "Power Generation"),
    tagline: d("A planned 12-week track.", "Una pista planificada de 12 semanas."),
    overview: d(
      "A planned 12-week track. It remains in planning and is not commercially available.",
      "Una pista planificada de 12 semanas. Sigue en planificación y no está disponible comercialmente."
    ),
    audience: d("To be defined with the program release.", "Por definir con el lanzamiento del programa."),
    focus: d("Power generation for jumping.", "Generación de potencia para el salto."),
    format: d("Planned 12-week training track.", "Pista de entrenamiento planificada de 12 semanas."),
  },
  {
    id: "speed-killer",
    core: false,
    status: STATUS.PLANNED,
    duration: d("Planned 12-week track", "Pista planificada de 12 semanas"),
    name: d("Speed Killer", "Speed Killer"),
    tagline: d("A planned 12-week track. Separate from SpeedX.", "Una pista planificada de 12 semanas. Separada de SpeedX."),
    overview: d(
      "A planned 12-week track, and a separate product from SpeedX. It remains in planning and is not commercially available.",
      "Una pista planificada de 12 semanas, y un producto separado de SpeedX. Sigue en planificación y no está disponible comercialmente."
    ),
    audience: d("To be defined with the program release.", "Por definir con el lanzamiento del programa."),
    focus: d("Speed development for jumping.", "Desarrollo de velocidad para el salto."),
    format: d("Planned 12-week training track.", "Pista de entrenamiento planificada de 12 semanas."),
  },
  {
    id: "speedx",
    core: false,
    status: STATUS.IN_DEV,
    duration: d("4-week add-on", "Complemento de 4 semanas"),
    name: d("SpeedX", "SpeedX"),
    tagline: d("A 4-week speed and acceleration add-on.", "Un complemento de 4 semanas de velocidad y aceleración."),
    overview: d(
      "A 4-week speed and acceleration add-on designed to layer onto a main pathway. In development and separate from Speed Killer.",
      "Un complemento de 4 semanas de velocidad y aceleración diseñado para sumarse a un camino principal. En desarrollo y separado de Speed Killer."
    ),
    audience: d("Athletes already training on a main pathway.", "Atletas ya entrenando en un camino principal."),
    focus: d("Speed and acceleration.", "Velocidad y aceleración."),
    format: d("4-week add-on.", "Complemento de 4 semanas."),
  },
  {
    id: "leancutx",
    core: false,
    status: STATUS.UNDER_REVIEW,
    duration: d("4-week add-on", "Complemento de 4 semanas"),
    name: d("LeanCutX", "LeanCutX"),
    tagline: d("A 4-week conditioning and body-composition add-on under review.", "Un complemento de 4 semanas de acondicionamiento y composición corporal, en revisión."),
    overview: d(
      "A 4-week conditioning and body-composition add-on. Like Recovery, it requires further review and is not promoted as a ready-to-purchase product.",
      "Un complemento de 4 semanas de acondicionamiento y composición corporal. Como Recovery, requiere revisión adicional y no se promociona como producto listo para compra."
    ),
    audience: d("To be defined after review.", "Por definir tras la revisión."),
    focus: d("Conditioning and body composition.", "Acondicionamiento y composición corporal."),
    format: d("4-week add-on.", "Complemento de 4 semanas."),
  },
];

export const flightLevels = [
  {
    n: "01",
    name: d("Grasshopper", "Grasshopper"),
    desc: d("Athletes under 14.", "Atletas menores de 14 años."),
  },
  {
    n: "02",
    name: d("Frog", "Frog"),
    desc: d("Beginners.", "Principiantes."),
  },
  {
    n: "03",
    name: d("Hare", "Hare"),
    desc: d(
      "Athletes who can touch the rim but cannot yet dunk.",
      "Atletas que tocan el aro pero aún no matan."
    ),
  },
  {
    n: "04",
    name: d("Kangaroo", "Kangaroo"),
    desc: d("Basic dunkers.", "Matadores básicos."),
  },
  {
    n: "05",
    name: d("Spaceman", "Spaceman"),
    desc: d("Advanced or professional dunkers.", "Matadores avanzados o profesionales."),
  },
];

export const getProgram = (id) => programs.find((p) => p.id === id);
export const corePrograms = programs.filter((p) => p.core);
export const devPrograms = programs.filter((p) => !p.core);
