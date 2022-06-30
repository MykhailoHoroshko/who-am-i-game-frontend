import { useContext } from 'react';
import Btn from '../../components/btn/btn';
import GameDataContext from '../../contexts/game-data-context';
import { createGame } from '../../services/games-service';
import { NUMBER_OF_PLAYERS } from '../../constants/constants';

function AfterLogin({ setIsLogin }) {
  const { setGameData, playerId } = useContext(GameDataContext);

  return (
    <div className="after-login-wrapper">
      <div className="profile">
        <div className="profile__title">welcome</div>
        <div className="profile__body">
          <div className="profile__avatar"></div>
          <div className="profile__name">GreenDean</div>
          <div className="profile__edit-icon"></div>
        </div>
      </div>
      <Btn
        className={'btn-blue-outline'}
        onClick={async () => {
          setGameData(await createGame(playerId, NUMBER_OF_PLAYERS));
        }}
      >
        PLAY QUICK GAME
      </Btn>
      <Btn className={'btn-blue-outline'}>Lobbies</Btn>
      <Btn className={'btn-blue-outline'}>profile</Btn>
      <Btn
        className={'btn-pink-outline'}
        onClick={() => {
          setIsLogin(false);
        }}
      >
        log out
      </Btn>
    </div>
  );
}

export default AfterLogin;
