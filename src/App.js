
import './App.css';

import Content from './Content';

import Drivers from './Drivers';
import DriverProfile from './pages/DriverProfile';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path='/' element={<Content />} />
        <Route path='/drivers' element={<Drivers />} />
        <Route path='/drivers/:driverId' element={<DriverProfile />} />

      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
