import { useNavigate } from 'react-router-dom';
import GameDataContext from '../../../contexts/game-data-context';
import { useContext } from 'react';
import './leave-game.scss';

function LeaveGameModal({ showModal, setModalActive }) {
  const { resetData } = useContext(GameDataContext);
  const navigate = useNavigate();

  if (!showModal) {
    return null;
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        resetData();
        navigate('/');
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
        <button type="submit" className="modal-container__leave-btn">
          LEAVE
        </button>
        <button
          className="modal-container__cancel-btn"
          onClick={(e) => {
            e.preventDefault();
            setModalActive(false);
          }}
        >
          CANCEL
        </button>
      </div>
    </form>
  );
}

export default LeaveGameModal;
