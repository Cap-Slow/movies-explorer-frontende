import logoPath from '../../images/circle-logo.svg';

function AuthPage({ title, children }) {
  return (
    <section className="auth-page">
      <div className="auth-page__container">
        <img className="auth-page__logo" src={logoPath} alt="Логотип проекта" />
        <h2 className="auth-page__title">{title}</h2>
        <form className="auth-page__form">{children}</form>
      </div>
    </section>
  );
}

export default AuthPage;
