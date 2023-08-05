function Navigation({ onMenuOpen }) {
  return (
    <nav className="navigation__container">
      <a className="navigation__link navigation__link_font_medium">Фильмы</a>
      <a className="navigation__link navigation__link_font_regular navigation__link_margin_low">
        Сохранённые фильмы
      </a>
      <a className="navigation__link navigation__link_font-size_regular navigation__link_margin_medium">
        Аккаунт
      </a>
      <button
        onClick={onMenuOpen}
        className="navigation__menu-button navigation__button"
      ></button>
    </nav>
  );
}

export default Navigation;
