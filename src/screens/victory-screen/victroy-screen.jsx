import Btn from '../../components/btn/btn';
import GameTitle from '../../components/game-title/game-title';
import PlayerCard from '../../components/player-card/player-card';
import './victory-screen.scss';

function Victory() {
  return (
    <div className="victory-screen">
      <GameTitle />
      <PlayerCard avatar={'avatar01'} name={'GreenDean'} />
      <h3 className="victory-screen__message">
        CONGRATULATIONS. YOU HAVE WON THE GAME
      </h3>
      <Btn className="btn-blue-outline">GO TO MAIN MENU</Btn>
    </div>
  );
}

export default Victory;
