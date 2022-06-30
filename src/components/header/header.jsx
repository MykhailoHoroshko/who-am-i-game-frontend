import GameTitle from '../game-title/game-title';
import Btn from '../btn/btn';
import LeaveGameModal from '../modals/leave-game/leave-game';
import CountdownTimer from '../timer/timer-countdown/timer-countdown';
import clsx from 'clsx';
import { useState } from 'react';
import './header.scss';
import CreateNewLobbyModal from '../modals/create-new-lobby/create-new-lobby';

function Header({ type }) {
  const [displayModal, setDisplayModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);

  return (
    <header className="game-header">
      <GameTitle className={'small'} />
      {type === 'game-lobby' && (
        <>
          <div>SUGGEST A CHARACTER</div>
          <div className="game-header__timer-wrapper">
            <CountdownTimer
              inLobby={clsx({ 'in-lobby': type === 'game-lobby' })}
              time={120}
            />
          </div>
        </>
      )}
      {type === 'lobbies' && (
        <>
          <div>LOBBIES</div>
          <div className="create-btn-wrapper">
            <Btn
              className="btn-green-solid"
              onClick={() => setShowCreateModal(true)}
            >
              CREATE NEW LOBBY
            </Btn>
          </div>

          <CreateNewLobbyModal
            displayModal={showCreateModal}
            setDisplayModal={setShowCreateModal}
          />
        </>
      )}

      {type === 'play-game' && (
        <>
          <div className="game-header__leave-btn-wrapper">
            <Btn
              className={['btn-pink-solid', 'btn-rounded']}
              onClick={() => setDisplayModal(true)}
            >
              LEAVE GAME
            </Btn>
          </div>
          <LeaveGameModal
            showModal={displayModal}
            setModalActive={setDisplayModal}
          />
        </>
      )}
    </header>
  );
}

export default Header;
