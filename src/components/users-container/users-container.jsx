import CountdownTimer from '../timer/timer-countdown/timer-countdown';
import PlayerCard from '../player-card/player-card';
import ModalContext from '../../contexts/modal-context';
import './users-container.scss';
import { useContext } from 'react';

function UsersContainer({ mode, currentPlayer, players }) {
  const modalActive = useContext(ModalContext)[0];
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

  return (
    <div className="users">
      <div className="users__timer-container">
        <p className="users__turn">TURN TIME</p>
        <CountdownTimer
          small={'v-small'}
          time={mode === 'guess' || mode === 'answer' ? timeAnswer : timeGuess}
          paused={modalActive}
        />
      </div>
      {currentPlayer && (
        <PlayerCard
          className="in-users-container"
          avatarClassName={currentPlayer.avatar}
          name={currentPlayer.player.name}
          isYou
        />
      )}
      <hr />
      <div className="users__list">
        {players ? (
          players.map((player) => (
            <PlayerCard
              className="in-users-container"
              key={player.player.id}
              name={player.player.name}
              avatarClassName={player.avatar}
              assignedCharacter={player.player.character}
            />
          ))
        ) : (
          <h1>Something went wrong</h1>
        )}
      </div>
    </div>
  );
}

export default UsersContainer;
