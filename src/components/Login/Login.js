import AuthPage from '../AuthPage/AuthPage';
import FormInput from '../FormInput/FormInput';
import InputError from '../InputError/InputError';

function Login() {
  return (
    <AuthPage title={'Рады видеть!'}>
      <FormInput type="email" required labelName={'E-mail'} />
      <InputError />
      <FormInput type="password" required labelName={'Пароль'} />
      <InputError>Что-то пошло не так...</InputError>
      <button className="login__submit-button" type="submit">
        Войти
      </button>
      <p className="login__text register__text">
        Ещё не зарегистрированы?{' '}
        <a className="login__link register__link" href="/signin">
          Регистрация
        </a>
      </p>
    </AuthPage>
  );
}

export default Login;
