import GameTitle from '../../components/game-title/game-title';
import Btn from '../../components/btn/btn';
import ScreenWrapper from '../../components/wrappers/screen-wrapper/screen-wrapper';
import PlayersOnline from '../../components/players-online/players-online';
import GameDataContext from '../../contexts/game-data-context';
import { useContext } from 'react';
import { createGame } from '../../services/games-service';
import { NUMBER_OF_PLAYERS } from '../../constants/constants';
import './home.scss';

function Homepage() {
  const { setGameData, playerId } = useContext(GameDataContext);

  return (
    <ScreenWrapper>
      <GameTitle />
      <PlayersOnline playersNumber={97} />
      <Btn
        className={'btn-blue-outline'}
        onClick={async () => {
          setGameData(await createGame(playerId, NUMBER_OF_PLAYERS));
        }}
      >
        PLAY QUICK GAME
      </Btn>
    </ScreenWrapper>
  );
}

export default Homepage;
