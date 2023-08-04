function MoviesCardList({ children, isMoviesPage }) {
  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__list">{children}</ul>
      {isMoviesPage && (
        <button className="movies-card-list__load-button">Ещё</button>
      )}
    </section>
  );
}

export default MoviesCardList;
