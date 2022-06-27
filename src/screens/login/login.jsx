import GameTitle from '../../components/game-title/game-title';
import PlayersOnline from '../../components/players-online/players-online';
import ScreenWrapper from '../../components/wrappers/screen-wrapper/screen-wrapper';
import Btn from '../../components/btn/btn';
import GameDataContext from '../../contexts/game-data-context';
import { NUMBER_OF_PLAYERS } from '../../constants/constants';
import { createGame } from '../../services/games-service';
import { useContext } from 'react';
import {ReactComponent as FacebookIcon} from '../../assets/icons/facebook-icon.svg';
import './login.scss';

function Login() {
  const { setGameData, playerId } = useContext(GameDataContext);

  return (
    <ScreenWrapper>
      <GameTitle />
      <PlayersOnline playersNumber={32} />
      <Btn
        className={'btn-blue-outline'}
        onClick={async () => {
          setGameData(await createGame(playerId, NUMBER_OF_PLAYERS));
        }}
      >
        PLAY QUICK GAME
      </Btn>
      <div className='demarcation-line'></div>
      <Btn
        className={'btn-blue-outline'}
      >
        CREATE ACCOUNT
      </Btn>
      <p className='login__or-mark'>OR</p>
      <Btn
        className={'btn-facebook'}
      >
        <FacebookIcon />
        Continue With Facebook
      </Btn>
      <div className='demarcation-line'></div>
      <h3>ALREADY HAVE AN ACCOUNT?</h3>
      <Btn
        className={['btn-blue-outline', 'btn-blue-outline-small']}
      >
        SIGN IN
      </Btn>
    </ScreenWrapper>
  );
}

export default Login;
