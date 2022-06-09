import Btn from '../../components/btn/btn';
import PlayerCard from '../../components/player-card/player-card';
import './createUser.scss';

const users = [
  {
    avatar: 'avatar01',
    name: 'GreenDean',
    character: 'This is you',
    userStatus: 'yes',
  },
  {
    avatar: 'avatar02',
    name: 'Khalilormous',
    character: undefined,
    userStatus: 'no',
  },
  {
    avatar: 'avatar03',
    name: 'KayPee',
    character: undefined,
    userStatus: 'dont-know',
  },
  {
    avatar: 'avatar04',
    name: 'Ted_Read',
    character: undefined,
    userStatus: 'dont-know',
  },
];

function CreateUser() {
  return (
    <div className="create-user">
      <div className="create-user__wrapp">
        {users.map((item) => (
          <PlayerCard user={item} />
        ))}
      </div>
      <div className="create-user__btns">
        <Btn>Suggest a character</Btn>
        <Btn className={'btn-pink-solid'}>Leave Game</Btn>
      </div>
    </div>
  );
}

export default CreateUser;
