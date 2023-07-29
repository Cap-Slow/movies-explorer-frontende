import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';

function Main() {
  return (
    <section className="main">
      <Header>
        <div className="header__nav-container">
          <a className="header__link">Регистрация</a>
          <button className="header__button">Войти</button>
        </div>
      </Header>
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
    </section>
  );
}

export default Main;
