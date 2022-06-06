import Btn from '../../components/btn/btn';
import PlayerCard from '../../components/player-card/player-card';
import './input-player.scss';

function InputPlayer() {
  return (
    <div className="input-player">
    <div className="player-card-wrapp">
      <PlayerCard
        avatar="avatar01"
        name="Player 1"
        desription="this is you"
        playerStaus="yes"
      />
      <PlayerCard avatar="avatar02" name="Player 2" playerStaus="no" />
      <PlayerCard
        avatar="avatar03"
        name="Player 3"
        playerStaus="dont-know"
      />
      <PlayerCard
        avatar="avatar04"
        name="Player 4"
        playerStaus="dont-know"
      />
    </div>
    <div className="btn-wrapp">
      <Btn >Suggest a character</Btn>
      <Btn btnStyle={'btn-pink-solid'}>Leave Game</Btn>
    </div>
  </div>
  );
}

export default InputPlayer;