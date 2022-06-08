import GameTitle from '../../components/game-title/game-title';
import Btn from '../../components/btn/btn';
import './home.scss';

function Homepage() {
  const playersNumber = 97;

  return (
    <div className="homepage">
      <GameTitle />
      <span className="homepage__players_online">
        {playersNumber} {playersNumber > 1 ? 'Players' : 'Player'} Online
      </span>
      <Btn className="btn-blue-outline">PLAY QUICK GAME</Btn>
    </div>
  );
}

export default Homepage;
