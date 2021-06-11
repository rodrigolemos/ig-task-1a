import { createContext, useContext, useEffect, useState } from 'react';
import { api } from '../../services/api';
import {
  MoviesContextProps,
  MoviesContextProviderProps,
  GenreResponseProps,
  MovieProps
} from './interfaces';

const MoviesContext = createContext({} as MoviesContextProps);

export const MoviesContextProvider = ({ children }: MoviesContextProviderProps) => {
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);
    });

    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);

  function handleSelectGenre(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <MoviesContext.Provider value={{
      movies,
      genres,
      handleSelectGenre,
      selectedGenre,
      selectedGenreId
    }}>
      {children}
    </MoviesContext.Provider>
  )
}

export const useMovies = () => {
  const context = useContext(MoviesContext);
  if (!context) throw new Error();
  return context;
}
