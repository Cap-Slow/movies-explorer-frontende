import MoviesCard from '../MoviesCard/MoviesCard';
import firstImagePath from '../../images/movie-placeholders/33slova.png';
import secondImagePath from '../../images/movie-placeholders/second-image.png';
import thirdImagePath from '../../images/movie-placeholders/third-image.png';
import fourthImagePath from '../../images/movie-placeholders/fourth-image.png';
import fifthImagePath from '../../images/movie-placeholders/fifth-image.png';
import sixthImagePath from '../../images/movie-placeholders/sixth-image.png';
import seventhImagePath from '../../images/movie-placeholders/seventh-image.png';
import eighthImagePath from '../../images/movie-placeholders/eighth-image.png';
import ninthImagePath from '../../images/movie-placeholders/ninth-image.png';
import tenthImagePath from '../../images/movie-placeholders/tenth-image.png';
import eleventhImagePath from '../../images/movie-placeholders/eleventh-image.png';
import twelfthImagePath from '../../images/movie-placeholders/twelfth-image.png';

function MoviesCardList({ children, isMoviesPage }) {
  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__list">{children}</ul>
      {isMoviesPage && (
        <button className="movies-card-list__load-button">Ещё</button>
      )}
    </section>
  );
}

export default MoviesCardList;
