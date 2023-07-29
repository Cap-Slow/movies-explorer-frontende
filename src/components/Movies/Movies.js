import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import Footer from '../Footer/Footer';

function Movies() {
  return (
    <section className="movies">
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
      {/* <Preloader /> */}
      <MoviesCardList />
      <Footer />
    </section>
  );
}

export default Movies;
