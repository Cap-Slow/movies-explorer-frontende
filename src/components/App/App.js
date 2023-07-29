import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="page">
            <Main></Main>
          </div>
        }
      />
      <Route
        path="/movies"
        element={
          <div className="page">
            <Movies></Movies>
          </div>
        }
      />
      <Route
        path="/saved-movies"
        element={
          <div className="page">
            <SavedMovies></SavedMovies>
          </div>
        }
      />
      <Route
        path="/profile"
        element={
          <div className="page">
            <Profile></Profile>
          </div>
        }
      />
    </Routes>
  );
}

export default App;
