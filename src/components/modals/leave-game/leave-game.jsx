import GameDataContext from '../../../contexts/game-data-context';
import { useContext } from 'react';
import './leave-game.scss';
import Btn from '../../btn/btn';
import { leaveGame } from '../../../services/games-service';

function LeaveGameModal({ showModal, setModalActive }) {
  const { gameData, playerId } = useContext(GameDataContext);
  const { resetData } = useContext(GameDataContext);

  if (!showModal) {
    return null;
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        resetData();
        leaveGame(playerId, gameData.data.id);
      }}
      className="modal-container"
    >
      <div className="modal-container__title-container">
        <h3 className="modal-container__title">LEAVE THE GAME</h3>
        <button
          className="modal-container__cross-btn"
          onClick={(e) => {
            e.preventDefault();
            setModalActive(false);
          }}
        />
      </div>
      <p className="modal-container__question">
        Are you sure you want to leave the game?
      </p>
      <div className="modal-container__selector-container">
        <Btn type="submit" className="btn-pink-solid">
          LEAVE
        </Btn>
        <Btn
          className="modal-container__cancel-btn"
          onClick={(e) => {
            e.preventDefault();
            setModalActive(false);
          }}
        >
          CANCEL
        </Btn>
      </div>
    </form>
  );
}

export default LeaveGameModal;
