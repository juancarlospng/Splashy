// Planned Flight School library — 21 topics across 4 collections.
// Built from the project brief's named topics and vocabulary; the final list
// must be reconciled with the Flight Master Project Plan's 21 official topics.
const d = (en, es) => ({ en, es });

export const CATEGORIES = {
  fundamentals: { en: "Fundamentals & mechanics", es: "Fundamentos y mecánica" },
  training: { en: "Training & physical development", es: "Entrenamiento y desarrollo físico" },
  ball: { en: "Ball control", es: "Control del balón" },
  dunk: { en: "Dunk library", es: "Biblioteca de mates" },
};

export const topics = [
  // Fundamentals & mechanics
  {
    id: "approach",
    category: "fundamentals",
    featured: true,
    title: d("Approach", "La carrera de impulso"),
    summary: d(
      "The steps that set everything up: rhythm, direction and control before takeoff.",
      "Los pasos que lo preparan todo: ritmo, dirección y control antes del despegue."
    ),
  },
  {
    id: "foot-gathers",
    category: "fundamentals",
    featured: true,
    title: d("Foot Gathers", "Ajuste de pies"),
    summary: d(
      "How the feet find the takeoff position — the quiet detail behind clean jumps.",
      "Cómo los pies encuentran la posición de despegue — el detalle silencioso detrás de un salto limpio."
    ),
  },
  {
    id: "penultimate-step",
    category: "fundamentals",
    title: d("The Penultimate Step", "El penúltimo paso"),
    summary: d(
      "The last step before takeoff and how it converts speed into height.",
      "El último paso antes del despegue y cómo convierte velocidad en altura."
    ),
  },
  {
    id: "takeoff-mechanics",
    category: "fundamentals",
    title: d("Takeoff Mechanics", "Mecánica del despegue"),
    summary: d(
      "What the body does at the moment of takeoff, joint by joint.",
      "Qué hace el cuerpo en el momento del despegue, articulación por articulación."
    ),
  },
  {
    id: "arm-swing",
    category: "fundamentals",
    title: d("Arm Swing", "El braceo"),
    summary: d(
      "How the arms contribute height, timing and control in the jump.",
      "Cómo los brazos aportan altura, ritmo y control al salto."
    ),
  },
  {
    id: "landing-mechanics",
    category: "fundamentals",
    title: d("Landing Mechanics", "Mecánica de aterrizaje"),
    summary: d(
      "Coming down as a skill — absorbing, stabilizing and staying available for the next jump.",
      "Caer como una habilidad — absorber, estabilizar y estar listo para el siguiente salto."
    ),
  },

  // Training & physical development
  {
    id: "foundation-strength",
    category: "training",
    title: d("Foundation Strength", "Fuerza de base"),
    summary: d(
      "The strength base that makes jump training productive instead of risky.",
      "La base de fuerza que hace productivo —y no arriesgado— el entrenamiento de salto."
    ),
  },
  {
    id: "power-development",
    category: "training",
    title: d("Power Development", "Desarrollo de potencia"),
    summary: d(
      "Turning strength into speed of movement: the bridge toward explosiveness.",
      "Convertir fuerza en velocidad de movimiento: el puente hacia la explosividad."
    ),
  },
  {
    id: "speed-and-acceleration",
    category: "training",
    title: d("Speed & Acceleration", "Velocidad y aceleración"),
    summary: d(
      "Building the sprint speed that feeds the approach and the first step.",
      "Construir la velocidad de carrera que alimenta la impulso y el primer paso."
    ),
  },
  {
    id: "mobility-for-jumpers",
    category: "training",
    title: d("Mobility for Jumpers", "Movilidad para saltadores"),
    summary: d(
      "The ranges of motion a jumper needs to move well and keep progressing.",
      "Los rangos de movimiento que un saltador necesita para moverse bien y seguir progresando."
    ),
  },
  {
    id: "body-conditioning",
    category: "training",
    title: d("Conditioning & Body Composition", "Acondicionamiento y composición corporal"),
    summary: d(
      "Conditioning and body composition for jumping athletes — a grounded look at the topic.",
      "Acondicionamiento y composición corporal para atletas de salto — una mirada con los pies en la tierra."
    ),
  },
  {
    id: "recovery-fundamentals",
    category: "training",
    title: d("Recovery Fundamentals", "Fundamentos de recuperación"),
    summary: d(
      "Rest as part of training: what recovery basics every jumper should understand.",
      "El descanso como parte del entrenamiento: qué nociones básicas de recuperación debe entender cada saltador."
    ),
  },

  // Ball control
  {
    id: "ball-grip",
    category: "ball",
    title: d("Ball Grip", "El agarre del balón"),
    summary: d(
      "Grip as the first skill of dunking — hands, seams and control.",
      "El agarre como la primera habilidad del mate — manos, costuras y control."
    ),
  },
  {
    id: "control-in-the-air",
    category: "ball",
    title: d("Control in the Air", "Control en el aire"),
    summary: d(
      "Keeping the ball while moving fast and high: body, ball and timing as one.",
      "Mantener el balón moviéndose rápido y alto: cuerpo, balón y ritmo como uno."
    ),
  },
  {
    id: "two-hand-control",
    category: "ball",
    title: d("One Hand vs. Two Hands", "Una mano frente a dos manos"),
    summary: d(
      "What changes between one-handed and two-handed ball control at the rim.",
      "Qué cambia entre el control del balón a una o dos manos en el aro."
    ),
  },

  // Dunk library
  {
    id: "windmill-tomahawk",
    category: "dunk",
    featured: true,
    title: d("Windmill / Tomahawk", "Windmill / Tomahawk"),
    summary: d(
      "Two classic expressions of style at the rim — mechanics and intent behind each.",
      "Dos expresiones clásicas de estilo en el aro — mecánica e intención de cada una."
    ),
  },
  {
    id: "one-foot-dunks",
    category: "dunk",
    title: d("One-Foot Dunks", "Mates de un pie"),
    summary: d(
      "The one-foot dunk family: approach, angle and flight path.",
      "La familia del mate de un pie: carrera, ángulo y trayectoria de vuelo."
    ),
  },
  {
    id: "two-foot-dunks",
    category: "dunk",
    title: d("Two-Foot Dunks", "Mates de dos pies"),
    summary: d(
      "The two-foot dunk family: plant, power and rise.",
      "La familia del mate de dos pies: apoyo, potencia y elevación."
    ),
  },
  {
    id: "first-dunk",
    category: "dunk",
    title: d("From Rim to First Dunk", "Del aro al primer mate"),
    summary: d(
      "The honest path from touching the rim to finishing your first dunk.",
      "El camino honesto desde tocar el aro hasta completar tu primer mate."
    ),
  },
  {
    id: "advanced-variations",
    category: "dunk",
    title: d("Advanced Variations", "Variaciones avanzadas"),
    summary: d(
      "What separates advanced dunking — and the order in which to learn it.",
      "Qué separa el mate avanzado — y en qué orden aprenderlo."
    ),
  },
  {
    id: "style-and-creativity",
    category: "dunk",
    title: d("Style & Creativity", "Estilo y creatividad"),
    summary: d(
      "Style as personal signature, built on top of clean mechanics.",
      "El estilo como firma personal, construido sobre una mecánica limpia."
    ),
  },
];

export const categoryList = Object.keys(CATEGORIES);
export const getTopic = (id) => topics.find((t) => t.id === id);
