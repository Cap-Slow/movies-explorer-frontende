import MoviesCard from '../MoviesCard/MoviesCard';
import firstImagePath from '../../images/movie-placeholders/33slova.png';
import secondImagePath from '../../images/movie-placeholders/second-image.png';
import thirdImagePath from '../../images/movie-placeholders/third-image.png';
import fourthImagePath from '../../images/movie-placeholders/fourth-image.png';
import fifthImagePath from '../../images/movie-placeholders/fifth-image.png';
import sixthImagePath from '../../images/movie-placeholders/sixth-image.png';
import seventhImagePath from '../../images/movie-placeholders/seventh-image.png';
import eighthImagePath from '../../images/movie-placeholders/eighth-image.png';
import ninthImagePath from '../../images/movie-placeholders/ninth-image.png';
import tenthImagePath from '../../images/movie-placeholders/tenth-image.png';
import eleventhImagePath from '../../images/movie-placeholders/eleventh-image.png';
import twelfthImagePath from '../../images/movie-placeholders/twelfth-image.png';

function MoviesCardList() {
  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__list">
        <MoviesCard
          title={'33 слова о дизайне'}
          duration={'1ч 17м'}
          imageLink={firstImagePath}
          isSaved={false}
        />
        <MoviesCard
          title={'Киноальманах «100 лет дизайна»'}
          duration={'1ч 17м'}
          imageLink={secondImagePath}
          isSaved={true}
        />
        <MoviesCard
          title={'В погоне за Бенкси'}
          duration={'1ч 17м'}
          imageLink={thirdImagePath}
          isSaved={false}
        />
        <MoviesCard
          title={'Баския: Взрыв реальности'}
          duration={'1ч 17м'}
          imageLink={fourthImagePath}
          isSaved={false}
        />
        <MoviesCard
          title={'Бег это свобода'}
          duration={'1ч 17м'}
          imageLink={fifthImagePath}
          isSaved={false}
        />
        <MoviesCard
          title={'Книготорговцы'}
          duration={'1ч 17м'}
          imageLink={sixthImagePath}
          isSaved={true}
        />
        <MoviesCard
          title={'Когда я думаю о Германии ночью'}
          duration={'1ч 17м'}
          imageLink={seventhImagePath}
          isSaved={false}
        />
        <MoviesCard
          title={'Gimme Danger: История Игги и The Stooges'}
          duration={'1ч 17м'}
          imageLink={eighthImagePath}
          isSaved={false}
        />
        <MoviesCard
          title={'Дженис: Маленькая девочка грустит'}
          duration={'1ч 17м'}
          imageLink={ninthImagePath}
          isSaved={false}
        />
        <MoviesCard
          title={'Соберись перед прыжком'}
          duration={'1ч 17м'}
          imageLink={tenthImagePath}
          isSaved={false}
        />
        <MoviesCard
          title={'Пи Джей Харви: A dog called money'}
          duration={'1ч 17м'}
          imageLink={eleventhImagePath}
          isSaved={false}
        />
        <MoviesCard
          title={'По волнам: Искусство звука в кино'}
          duration={'1ч 17м'}
          imageLink={twelfthImagePath}
          isSaved={false}
        />
      </ul>
      <button className="movies-card-list__load-button">Ещё</button>
    </section>
  );
}

export default MoviesCardList;
