function Navigation() {
  return (
    <nav className="navigation__container">
      <a className="navigation__link navigation__link_font_medium">Фильмы</a>
      <a className="navigation__link navigation__link_font_regular navigation__link_margin_low">
        Сохранённые фильмы
      </a>
      <a className="navigation__link navigation__link_font-size_regular navigation__link_margin_medium">
        Аккаунт
      </a>
      <button className="navigation__account-button navigation__button"></button>
    </nav>
  );
}

export default Navigation;
