
import './App.css';

import Content from './Content';

import DriversList from './DriversList';
import DriverProfile from './pages/DriverProfile';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';

function App() {
  return (
    <BrowserRouter>
    < NavBar />
    <div>
      <Routes>
        <Route path='/' element={<Content />} />
        <Route path='/drivers' element={<DriversList />} />
        <Route path='/drivers/:driverId' element={<DriverProfile />} />

      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
