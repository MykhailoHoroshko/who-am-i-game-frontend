import { Route, Routes, Navigate } from 'react-router-dom';
import Homepage from './screens/home/home';
import Loading from './screens/loading/loading';
import PlayPage from './screens/play-page/play-page';
import LostGame from './screens/lost-game/lost-game';
import Victory from './screens/victory-screen/victroy-screen';
import InactivityKick from './screens/inactiviy-kick/inactivity-kick';
import Lobby from './screens/lobby/lobby';
import Login from './screens/login/login';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="loading" element={<Loading />} />
        <Route path="lobby" element={<Lobby />} />
        <Route path="play" element={<PlayPage />} />
        <Route path="defeat" element={<LostGame />} />
        <Route path="victory" element={<Victory />} />
        <Route path="inactive" element={<InactivityKick />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
