import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
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
        path="movies"
        element={
          <div className="page">
            <Movies></Movies>
          </div>
        }
      />
    </Routes>
  );
}

export default App;
