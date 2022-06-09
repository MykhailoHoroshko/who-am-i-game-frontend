import clsx from 'clsx';
import './player-card.scss';

function PlayerCard({user:{
  avatar,
  name,
  character = 'd-none',
  userStatus = 'd-none',
}}) {
  return (
    <div className="player-card">
      <div className="player">
        <div className={clsx('avatar', avatar)}></div>
        <div className="player-name">{name}</div>
        <div
          className={clsx('player-character', {
            'd-none': character == 'd-none',
          })}
        >
          {character}
        </div>
      </div>
      <div className={clsx('player-status', userStatus)}></div>
    </div>
  );
}

export default PlayerCard;
