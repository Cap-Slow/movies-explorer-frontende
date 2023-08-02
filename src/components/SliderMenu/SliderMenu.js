function SliderMenu() {
  return (
    <nav className="slider-menu ">
      <div className="slider-menu__link-container">
        <a className="slider-menu__link" href="#">
          Главная
        </a>
        <a
          className="slider-menu__link slider-menu__link_type_underline"
          href="#"
        >
          Фильмы
        </a>
        <a className="slider-menu__link" href="#">
          Сохранённые фильмы
        </a>
      </div>
      <div className="slider-menu__account-section">
        <a className="slider-menu__link slider-menu__link_text_small" href="#">
          Аккаунт
        </a>
        <button className="slider-menu__account-button"></button>
      </div>
      <button className="slider-menu__close-button"></button>
    </nav>
  );
}

export default SliderMenu;
