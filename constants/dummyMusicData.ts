export type listType = {
  title: string;
  subtitle: string;
  image: string;
  isExplicit?: boolean;
  isAI?: boolean;
};

export const hotAndTrending : listType[] = [
  { title: "Echoes of Tomorrow", subtitle: "The Soundsmiths", image: "https://picsum.photos/seed/echoes-tomorrow/300" },
  { title: "Whispers in the Wind", subtitle: "Melody Makers", image: "https://picsum.photos/seed/whispers-wind/300", isExplicit: true },
  { title: "Rhythms of the Night", subtitle: "The Beat Brigade", image: "https://picsum.photos/seed/rhythms-night/300" },
  { title: "Chasing Stars", subtitle: "Harmonic Fusion", image: "https://picsum.photos/seed/chasing-stars/300" },
];

export const artistsInFocus : listType[] = [
  { title: "La Brume", subtitle: "41K follow", image: "https://picsum.photos/seed/la-brume/300" },
  { title: "Pascal Texto", subtitle: "11K follow", image: "https://picsum.photos/seed/pascal-texto/300" },
  { title: "Eva Dance", subtitle: "32K follow", image: "https://picsum.photos/seed/eva-dance/300" },
  { title: "Michelle Yufus", subtitle: "32K follow", image: "https://picsum.photos/seed/michelle-yufus/300" },
];

export const noteworthyAlbums : listType[] = [
  { title: "Lost in Harmony", subtitle: "Sonic Dreamers", image: "https://picsum.photos/seed/lost-harmony/300" },
  { title: "Echoes of the Past", subtitle: "The Sound Architects", image: "https://picsum.photos/seed/echoes-past/300" },
  { title: "Dancing Shadows", subtitle: "The Rhythm Collective", image: "https://picsum.photos/seed/dancing-shadows/300" },
];

export const playYourMixtape : listType[] = [
  { title: "Voices of the Night", subtitle: "The Melody Makers", image: "https://picsum.photos/seed/voices-night/300", isAI: true },
  { title: "Fading Echoes", subtitle: "The Harmony Guild", image: "https://picsum.photos/seed/fading-echoes/300", isAI: true },
  { title: "Eternal Beats", subtitle: "The Sound Explorers", image: "https://picsum.photos/seed/eternal-beats/300" },
  { title: "Rhythmic Journeys", subtitle: "The Tune Tribe", image: "https://picsum.photos/seed/rhythmic-journeys/300" },
];