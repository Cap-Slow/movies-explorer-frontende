import logoPath from '../../images/circle-logo.svg';
import FormInput from '../FormInput/FormInput';
import InputError from '../InputError/InputError';

function Register() {
  return (
    <section className="register">
      <div className="register__container">
        <img className="register__logo" src={logoPath} alt="Логотип проекта" />
        <h2 className="register__title">Добро пожаловать!</h2>
        <form className="register__form">
          <label className="register__label">Имя</label>
          <FormInput type="text" required />
          <InputError />
          <label className="register__label">E-mail</label>
          <FormInput type="email" required />
          <InputError />
          <label className="register__label">Пароль</label>
          <FormInput type="password" required />
          <InputError>Что-то пошло не так...</InputError>
          <button className="register__submit-button" type="submit">
            Зарегистрироваться
          </button>
          <p className="register__text">
            Уже зарегистрированы?{' '}
            <a className="register__link" href="/signin">
              Войти
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Register;
