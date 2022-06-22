import './players-online.scss';

function PlayersOnline({ playersNumber }) {
  return (
    <span className="players-online">
      {playersNumber} {playersNumber > 1 ? 'PLAYERS' : 'PLAYER'} ONLINE
    </span>
  );
}

export default PlayersOnline;
