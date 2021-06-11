import { ReactElement } from "react";

export interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export interface MoviesContextProps {
  movies: MovieProps[];
  genres: GenreResponseProps[];
  handleSelectGenre(id: number): void;
  selectedGenre: GenreResponseProps;
  selectedGenreId: number;
}

export interface MoviesContextProviderProps {
  children: ReactElement;
}