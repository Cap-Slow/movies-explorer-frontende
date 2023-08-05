import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import { useState } from 'react';

function Profile() {
  const [isEditableForm, setIsEditableForm] = useState(false);
  const [name, setName] = useState('Дмитрий');
  const [email, setEmail] = useState('pochta@yandex.ru');
  const [isProfileUpdateError, setIsProfileUpdateError] = useState(false);

  function editForm() {
    setIsEditableForm(true);
    setIsProfileUpdateError(true);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setIsEditableForm(false);
    setIsProfileUpdateError(false);
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  return (
    <section className="profile">
      <Header isLoggedIn={true}>
        <Navigation />
      </Header>
      <div className="profile__container">
        <h2 className="profile__title">Привет, Дмитрий!</h2>
        <form className="profile__form-container">
          <div className="profile__row-container">
            <p className="profile__info-label">Имя</p>
            <input
              className="profile__input"
              type="text"
              required
              value={name}
              disabled={!isEditableForm}
              onChange={handleNameChange}
            />
          </div>
          <div className="profile__row-container">
            <label className="profile__info-label">E-mail</label>
            <input
              className="profile__input"
              type="text"
              required
              value={email}
              disabled={!isEditableForm}
              onChange={handleEmailChange}
            />
          </div>
        </form>
        <p
          className={`profile__error-message ${
            isProfileUpdateError ? 'profile__error-message_type_visible' : ''
          }  `}
        >
          При обновлении профиля произошла ошибка.
        </p>
        {!isEditableForm && (
          <button className="profile__button " onClick={editForm}>
            Редактировать
          </button>
        )}
        {!isEditableForm && (
          <button className="profile__button profile__button_color_red">
            Выйти из аккаунта
          </button>
        )}
        {isEditableForm && (
          <button className="profile__save-button" onClick={handleSubmit}>
            Сохранить
          </button>
        )}
      </div>
    </section>
  );
}

export default Profile;
