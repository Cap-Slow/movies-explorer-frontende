import serachIconPath from '../../images/search.svg';

function SearchForm() {
  return (
    <section className="search-form">
      <form noValidate className="search-form__form">
        <div className="search-form__input-container">
          <img
            className="search-form__icon"
            src={serachIconPath}
            alt="Иконка поиска"
          />
          <input
            className="search-form__input"
            type="text"
            placeholder="Фильм"
          />
        </div>
        <button className="search-form__sumbit-button" type="submit">
          Найти
        </button>
        <div class="search__form-divider"></div>
        <label className="search-form__checkbox-container">
          <input
            className="search-form__checkbox"
            type="checkbox"
            id="short-films"
            name="short-films"
          />
          <span class="search__form-visible-checkbox"></span>
          <span class="search-form__label-text">Короткометражки</span>
        </label>
      </form>
    </section>
  );
}

export default SearchForm;
