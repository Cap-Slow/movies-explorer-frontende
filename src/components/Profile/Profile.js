import Header from '../Header/Header';

function Profile() {
  return (
    <section className="profile">
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
      <div className="profile__container">
        <h2 className="profile__title">Привет, Дмитрий!</h2>
        <div className="profile__info-container">
          <div className="profile__row-container">
            <p className="profile__info-label">Имя</p>
            <p className="profile__text">Дмитрий</p>
          </div>
          <div className="profile__row-container">
            <label className="profile__info-label">E-mail</label>
            <p className="profile__text">dlyadov543@yandex.ru</p>
          </div>
        </div>
        <button className="profile__button ">Редактировать</button>
        <button className="profile__button profile__button_color_red">
          Выйти из аккаунта
        </button>
      </div>
    </section>
  );
}

export default Profile;
