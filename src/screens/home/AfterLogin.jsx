import Btn from '../../components/btn/btn';
import { createGame } from '../../services/games-service';
import { MAIN_LOBBY, PROFILE } from '../../constants/constants';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

function AfterLogin() {
  const navigate = useNavigate();
  const authCtx = useAuth();

  const logoutHandler = () => {
    authCtx.logout();
  };

  return (
    <div className="after-login-wrapper">
      <div className="profile">
        <div className="profile__title">welcome</div>
        <div className="profile__body">
          <div className="profile__avatar"></div>
          <div className="profile__name">{authCtx.username}</div>
          <div className="profile__edit-icon"></div>
        </div>
      </div>
      <Btn className={'btn-blue-outline'} onClick={createGame}>
        PLAY QUICK GAME
      </Btn>
      <Btn
        className={'btn-blue-outline'}
        onClick={() => {
          navigate(MAIN_LOBBY);
        }}
      >
        Lobbies
      </Btn>
      <Btn
        className={'btn-blue-outline'}
        onClick={() => {
          navigate(PROFILE);
        }}
      >
        profile
      </Btn>
      <Btn className={'btn-pink-outline'} onClick={logoutHandler}>
        log out
      </Btn>
    </div>
  );
}

export default AfterLogin;
