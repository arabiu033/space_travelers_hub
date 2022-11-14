import { Route, Routes } from 'react-router';
import Header from './components/header';
import Rockets from './components/rocket';
import Missions from './components/missions';
import Profile from './components/profile';
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
