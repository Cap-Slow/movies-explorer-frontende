import logoPath from '../../images/circle-logo.svg';

function Header({ children, isLoggedIn }) {
  return (
    <header className={`header ${isLoggedIn ? '' : 'header_theme_pink'}`}>
      <div className="header__container">
        <img
          src={logoPath}
          alt="Логотип дипломного проекта"
          className="header__logo"
        />
        {children}
      </div>
    </header>
  );
}

export default Header;
