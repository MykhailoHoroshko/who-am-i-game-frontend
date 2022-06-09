import { Route, Routes } from 'react-router-dom';
import Homepage from './screens/home/home';
import Loading from './screens/loading/loading';
import PlayPage from './screens/play-page/play-page';
import CreateCharacters from './screens/create-characters/create-characters';
import LostGame from './screens/lost-game/lost-game';
import Victory from './screens/victory-screen/victroy-screen';
import InactivityKick from './screens/inactiviy-kick/inactivity-kick';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="loading" element={<Loading />} />
        <Route path="play" element={<PlayPage />} />
        <Route path="create" element={<CreateCharacters />} />
        <Route path="lost" element={<LostGame />} />
        <Route path="victory" element={<Victory />} />
        <Route path="inactive" element={<InactivityKick />} />
      </Routes>
    </div>
  );
}

export default App;
