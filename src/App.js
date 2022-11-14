import { Route, Routes } from 'react-router';
import Header from './components/Header';
import Rockets from './pages/Rocket';
import Missions from './pages/Missions';
import Profile from './pages/Profile';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
