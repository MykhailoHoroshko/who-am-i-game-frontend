import Btn from '../../components/btn/btn';
import GameTitle from '../../components/game-title/game-title';
import './inactivity-kick.scss';

function InactivityKick() {
  return (
    <div className="inactivity-kick">
      <GameTitle />
      <p className="inactivity-kick__player">Green Dean</p>
      <h3 className="inactivity-kick__message">
        SORRY, YOU HAVE BEEN KICKED FROM THE GAME DUE TO INACTIVITY
      </h3>
      <Btn className="btn-blue-outline">GO TO MAIN MENU</Btn>
    </div>
  );
}

export default InactivityKick;
