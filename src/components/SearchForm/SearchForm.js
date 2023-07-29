import serachIconPath from '../../images/search.svg';
import FilterCheckbox from '../FIlterCheckbox/FilterCheckbox';

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
        <div className="search__form-divider"></div>
        <FilterCheckbox></FilterCheckbox>
      </form>
    </section>
  );
}

export default SearchForm;
