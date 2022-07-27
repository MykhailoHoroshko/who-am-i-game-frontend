import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import convertTime from '../../../helper-functions/convert-time';
import clsx from 'clsx';
import '../timer.scss';
import { INACTIVE } from '../../../constants/constants';
import { useContext } from 'react';
import GameDataContext from '../../../contexts/game-data-context';
import { leaveGame } from '../../../services/games-service';
import useTimer from '../../../hooks/useTimer';

function CountdownTimer({
  inLobby,
  time,
  small,
  timeClassName,
  paused,
  disableSessionTracker,
}) {
  const { gameData, resetData, playerId } = useContext(GameDataContext);
  const [seconds, setSeconds] = useState(time);
  const navigate = useNavigate();

  useEffect(() => {
    if (disableSessionTracker) {
      return;
    }
    const sessionTimer = sessionStorage.getItem('timer');

    if (sessionTimer) {
      const { seconds, time } = JSON.parse(sessionTimer);
      const diff = new Date().getTime() - time;
      const result = seconds - Math.floor(diff / 1000);

      setSeconds(result > 0 ? result : 0);
      sessionStorage.removeItem('timer');
    }

    function onBeforeUnload(e) {
      setSeconds((seconds) => {
        sessionStorage.setItem(
          'timer',
          JSON.stringify({ seconds, time: new Date().getTime() })
        );

        return seconds;
      });
    }

    window.addEventListener('beforeunload', onBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', onBeforeUnload);
    };
  }, [disableSessionTracker]);

  useTimer(() => {
    if (paused || seconds === 0) {
      return;
    }

    setSeconds((seconds) => seconds - 1);
  });

  useEffect(() => {
    async function leaveResetData() {
      if (seconds === 0) {
        try {
          await leaveGame(playerId, gameData.id);
          sessionStorage.removeItem('timerCounter');
          resetData();
          navigate(INACTIVE);
        } catch (error) {
          //to do: handle errors
        }
        // setSeconds(time);
      }
    }
    leaveResetData();
  });

  return (
    <div className="timer">
      <p className={clsx('timer__start', [inLobby, small])}>GAME START</p>
      <div
        className={clsx('timer__time', { 'time-small': small }, timeClassName)}
      >
        {convertTime(seconds)}
      </div>
    </div>
  );
}

export default CountdownTimer;
