import LobbyItem from '../lobby-item/lobby-item';
import Header from '../header/header';
import './main-lobby.scss';
import ScreenWrapper from '../wrappers/screen-wrapper/screen-wrapper';

function MainLobby() {
  // const [showSuggestModal, setSuggestModal] = useState(false);

  return (
    <ScreenWrapper className="lobby-screen">
      <Header type="lobbies" />
      <div className="main-lobby">
        <LobbyItem
          className="table-header"
          theme="Theme"
          numberOfPlayers="Number of Players"
          type="Type"
          icon
        />
        {[1, 2, 3, 4].map((num) => (
          <LobbyItem
            key={num}
            theme="Actors"
            numberOfPlayers={`5/12 players`}
            type="Public"
          />
        ))}
      </div>
      {/* <JoinLobbyModal
          playerNum={1}
          displayModal={showSuggestModal}
          setDisplayModal={setSuggestModal}
        /> */}
    </ScreenWrapper>
  );
}

export default MainLobby;
