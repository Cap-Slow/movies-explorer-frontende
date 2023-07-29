import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import Footer from '../Footer/Footer';
import firstImagePath from '../../images/movie-placeholders/33slova.png';
import secondImagePath from '../../images/movie-placeholders/second-image.png';
import thirdImagePath from '../../images/movie-placeholders/third-image.png';

function SavedMovies() {
  return (
    <section className="saved-movies">
      <Header isLoggedIn={true}>
        <div className="header__nav-container">
          <a className="header__link header__link_font_medium">Фильмы</a>
          <a className="header__link header__link_font_regular header__link_margin_low">
            Сохранённые фильмы
          </a>
          <a className="header__link header__link_font-size_regular header__link_margin_medium">
            Аккаунт
          </a>
          <button className="header__account-button header__button"></button>
        </div>
      </Header>
      <SearchForm />
      <MoviesCardList isMoviesPage={false}>
        <MoviesCard
          title={'33 слова о дизайне'}
          duration={'1ч 17м'}
          imageLink={firstImagePath}
        >
          <button className="movies-card__delete-icon movies-card__button"></button>
        </MoviesCard>
        <MoviesCard
          title={'Киноальманах «100 лет дизайна»'}
          duration={'1ч 17м'}
          imageLink={secondImagePath}
        >
          <button className="movies-card__delete-icon movies-card__button"></button>
        </MoviesCard>
        <MoviesCard
          title={'В погоне за Бенкси'}
          duration={'1ч 17м'}
          imageLink={thirdImagePath}
        >
          <button className="movies-card__delete-icon movies-card__button"></button>
        </MoviesCard>
      </MoviesCardList>
      <div className="saved-movies__blank-area"></div>
      <Footer />
    </section>
  );
}

export default SavedMovies;
