import { useContext } from 'react';
import Btn from '../../components/btn/btn';
import GameDataContext from '../../contexts/game-data-context';
import { createQuickGame } from '../../services/games-service';
import {
  CREATE_ACCOUNT,
  NUMBER_OF_PLAYERS,
  SIGN_IN,
} from '../../constants/constants';
import { useNavigate } from 'react-router-dom';

function BeforeLogin({ setIsLogin }) {
  const { setGameData, playerId } = useContext(GameDataContext);
  const navigate = useNavigate();

  return (
    <>
      <Btn
        className={'btn-blue-outline'}
        onClick={async () => {
          setGameData(await createQuickGame(playerId));
        }}
      >
        PLAY QUICK GAME
      </Btn>
      <div className="dividing-line"></div>
      <Btn
        className={'btn-blue-outline'}
        onClick={() => {
          navigate(CREATE_ACCOUNT);
        }}
      >
        CREATE ACCOUNT
      </Btn>
      <div className="text-login or">or</div>
      <Btn
        className={'btn-fb-blue'}
        iconClassName={'fb'}
        onClick={() => {
          setIsLogin(true);
        }}
      >
        Continue with Facebook
      </Btn>
      <div className="dividing-line"></div>
      <div className="text-login already">Already have a account?</div>
      <Btn
        className={'btn-blue-outline'}
        onClick={() => {
          navigate(SIGN_IN);
        }}
      >
        SIGN IN
      </Btn>
    </>
  );
}

export default BeforeLogin;
