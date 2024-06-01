export interface Film {
  title: string;
}

export interface FilmsData {
  allFilms: {
    films: Film[];
  };
}
