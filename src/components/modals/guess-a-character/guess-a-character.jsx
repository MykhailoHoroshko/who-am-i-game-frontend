import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CountdownTimer from '../../timer/timer-countdown/timer-countdown';
import Btn from '../../btn/btn';
import checkGuess from '../../../helper-functions/check-guess.js';
import './guess-a-character.scss';
import { submitGuess } from '../../../services/games-service';
import GameDataContext from '../../../contexts/game-data-context';

function GuessCharacterModal({ displayModal, setDisplayModal }) {
  const [guess, setGuess] = useState('');
  const { gameData, playerId } = useContext(GameDataContext);
  const navigate = useNavigate();

  useEffect(() => {
    return () => setGuess('');
  }, [displayModal]);

  if (!displayModal) {
    return null;
  }

  return (
    <form
      className="guess-character-modal"
      onSubmit={(e) => {
        e.preventDefault();
        setDisplayModal(false);
        submitGuess(playerId, gameData.data.id, guess);
      }}
    >
      <div className="guess-character-modal__title-container">
        <h3 className="guess-character-modal__title-container_title">
          READY TO GUESS?
        </h3>
        <div
          className="guess-character-modal__title-container_close-btn"
          onClick={() => {
            setDisplayModal(false);
          }}
        ></div>
      </div>
      <div className="guess-character-modal__timer-container">
        <p className="guess-character-modal__timer-container_name">TIME LEFT</p>
        <CountdownTimer time={60} inLobby={'in-lobby'} small={'v-small'} />
      </div>
      <input
        className="guess-character-modal__players-guess"
        type="text"
        placeholder="Enter your guess"
        value={guess}
        onChange={(e) => {
          setGuess(e.target.value);
        }}
      />
      <Btn
        className="btn-yellow-solid"
        disabled={checkGuess(guess)}
        type="submit"
      >
        I WANT TO GUESS
      </Btn>
    </form>
  );
}

export default GuessCharacterModal;
