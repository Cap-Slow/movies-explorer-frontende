import AuthPage from '../AuthPage/AuthPage';
import FormInput from '../FormInput/FormInput';
import InputError from '../InputError/InputError';

function Register() {
  return (
    <section className="register">
      <AuthPage title={'Добро пожаловать!'}>
        <FormInput type="text" required labelName={'Имя'} />
        <InputError />
        <FormInput type="email" required labelName={'E-mail'} />
        <InputError />
        <FormInput type="password" required labelName={'Пароль'} />
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
      </AuthPage>
    </section>
  );
}

export default Register;
