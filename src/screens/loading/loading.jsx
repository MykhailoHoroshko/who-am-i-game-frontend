import GameTitle from '../../components/game-title/game-title';
import Timer from '../../components/timer/timer';
import GuessCharacterModal from '../../components/modals/guess-a-character/guess-a-character';
import './loading.scss';
import { useState } from 'react';
import Btn from '../../components/btn/btn';
import LeaveGameModal from '../../components/modals/leave-game/leave-game';

function Loading() {
  const [displayModal, setDisplayModal] = useState(true);
  const [modalActive, setModalActive] = useState(false);

  const leaveGameModalHandle = () => setModalActive(true);

  return (
    <div className="loading">
      <div className="loading__wrapper">
        <GameTitle />
        <h3 className="loading__queue-number">23 PLAYERS ARE IN QUEUE</h3>
        <h3 className="loading__waiting-message">
          PLEASE WAIT UNTIL WE FIND YOUR OPPONENTS
        </h3>
        <Timer />
        <div className="loading__btn-wrap">
          <Btn onClick={leaveGameModalHandle} className="btn-pink-solid">
            Leave Game
          </Btn>
        </div>
        <LeaveGameModal
          showModal={modalActive}
          setModalActive={setModalActive}
        />
        <GuessCharacterModal
          displayModal={displayModal}
          setDisplayModal={setDisplayModal}
        />
      </div>
    </div>
  );
}

export default Loading;
