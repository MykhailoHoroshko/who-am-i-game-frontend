import Btn from '../../components/btn/btn';
import { CREATE_ACCOUNT, SIGN_IN } from '../../constants/constants';
import { useNavigate } from 'react-router-dom';
import CountdownTimer from '../../components/timer/timer-countdown/timer-countdown';

function BeforeLogin({ setIsLogin, createGame }) {
  const navigate = useNavigate();
  const getGuessTime = sessionStorage.getItem('timerGuess');
  const getAnswerTime = sessionStorage.getItem('timerAnswer');
  let timeGuess;
  let timeAnswer;
  getGuessTime > 0
    ? (timeGuess = sessionStorage.getItem('timerGuess'))
    : (timeGuess = 20);
  getAnswerTime > 0
    ? (timeAnswer = sessionStorage.getItem('timerAnswer'))
    : (timeAnswer = 60);
  const mode = 'answer';

  return (
    <>
      <CountdownTimer
        small={'v-small'}
        time={mode === 'guess' || mode === 'answer' ? timeAnswer : timeGuess}
      />
      <Btn className={'btn-blue-outline'} onClick={createGame}>
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
      <div className="text-login already">Already have an account?</div>
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
