
import './App.css';

import Content from './Content';
import DriversList from './DriversList';
import DriverProfile from './pages/DriverProfile';
import NotFoundPage from './NotFoundPage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    < NavBar />
    <div id="page-body">
      <Routes>
        <Route path='/' element={<Content />} />
        <Route path='/drivers' element={<DriversList />} />
        <Route path='/drivers/:driverId' element={<DriverProfile />} />
        <Route path='*' element={<NotFoundPage />} />

      </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
