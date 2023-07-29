import './App.css';
import Main from '../Main/Main';
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
    </Routes>
  );
}

export default App;
