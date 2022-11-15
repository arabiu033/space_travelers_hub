import { Route, Routes } from 'react-router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from './components/Header';
import Rockets from './pages/Rocket';
import Missions from './pages/Missions';
import Profile from './pages/Profile';
import { getMissions } from './redux/space/spaceSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissions());
  }, []);

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
