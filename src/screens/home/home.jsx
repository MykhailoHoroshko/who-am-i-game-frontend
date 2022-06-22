import GameTitle from '../../components/game-title/game-title';
import Btn from '../../components/btn/btn';
import ScreenWrapper from '../../components/wrappers/screen-wrapper/screen-wrapper';
import PlayersOnline from '../../components/players-online/players-online';
import { useNavigate } from 'react-router-dom';
import './home.scss';

function Homepage() {
  const navigate = useNavigate();

  return (
    <ScreenWrapper>
      <GameTitle />
      <PlayersOnline playersNumber={97} />
      <Btn
        className={'btn-blue-outline'}
        onClick={() => {
          navigate('loading');
        }}
      >
        PLAY QUICK GAME
      </Btn>
    </ScreenWrapper>
  );
}

export default Homepage;
