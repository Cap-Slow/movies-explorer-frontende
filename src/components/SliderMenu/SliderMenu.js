function SliderMenu({ isOpen, onClose }) {
  return (
    <nav className={`slider-menu ${isOpen ? 'slider-menu_opened' : ''}`}>
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
        <button className="slider-menu__account-button slider-menu__button"></button>
      </div>
      <button
        onClick={onClose}
        className="slider-menu__close-button slider-menu__button"
      ></button>
    </nav>
  );
}

export default SliderMenu;
