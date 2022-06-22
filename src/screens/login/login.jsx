import GameTitle from '../../components/game-title/game-title';
import PlayersOnline from '../../components/players-online/players-online';
import ScreenWrapper from '../../components/wrappers/screen-wrapper/screen-wrapper';
import './login.scss';

function Login() {
  return <ScreenWrapper>
    <GameTitle />
    <PlayersOnline playersNumber={32} />
  </ScreenWrapper>;
}

export default Login;
