
import { useMovies } from '../hooks/movies/index';
import { Button } from '../components/Button';
import { ReactElement } from 'react';

import '../styles/sidebar.scss';

export function SideBar(): ReactElement {
  const { genres, handleSelectGenre, selectedGenreId } = useMovies();
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleSelectGenre(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  );
}