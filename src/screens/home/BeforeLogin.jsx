import { useContext } from 'react';
import Btn from '../../components/btn/btn';
import GameDataContext from '../../contexts/game-data-context';
import { createGame } from '../../services/games-service';
import { NUMBER_OF_PLAYERS } from '../../constants/constants';

function BeforeLogin({ setIsLogin }) {
  const { setGameData, playerId } = useContext(GameDataContext);

  return (
    <>
      <Btn
        className={'btn-blue-outline'}
        onClick={async () => {
          setGameData(await createGame(playerId, NUMBER_OF_PLAYERS));
        }}
      >
        PLAY QUICK GAME
      </Btn>
      <div className="dividing-line"></div>
      <Btn className={'btn-blue-outline'}>CREATE ACCOUNT</Btn>
      <div className={'text-login or'}>or</div>
      <Btn className={'btn-fb-blue'} iconClassName={'fb'}>
        Continue with Facebook
      </Btn>
      <div className={'dividing-line'}></div>
      <div className={'text-login already'}>Already have a account?</div>
      <Btn
        className={'btn-blue-outline'}
        onClick={() => {
          setIsLogin(true);
        }}
      >
        SIGN IN
      </Btn>
    </>
  );
}

export default BeforeLogin;
