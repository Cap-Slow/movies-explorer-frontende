import logoPath from '../../images/circle-logo.svg';

function Header({ children }) {
  return (
    <header className="header">
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
