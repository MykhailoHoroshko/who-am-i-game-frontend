import GameTitle from '../../components/game-title/game-title';
import { useNavigate } from 'react-router-dom';
import ScreenWrapper from '../../components/wrappers/screen-wrapper/screen-wrapper';
import GameDataContext from '../../contexts/game-data-context';
import { useCallback, useContext, useEffect } from 'react';
import { NUMBER_OF_PLAYERS, LOADING } from '../../constants/constants';
import './home.scss';
import PlayersOnlineTitle from '../../components/players-online-title/players-online-title';
import AfterLogin from './AfterLogin';
import BeforeLogin from './BeforeLogin';
import useAuth from '../../hooks/useAuth';
import { createGame, leaveGame } from '../../services/games-service';

function Homepage() {
  const { setGameData, resetData, playerId } = useContext(GameDataContext);
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    async function leaveResetData() {
      const gameId = sessionStorage.getItem('gameId');
      const userId = playerId || sessionStorage.getItem('playerId');

      if (gameId && userId) {
        try {
          await leaveGame(userId, gameId);
          resetData();
        } catch (error) {
          //to do: handle errors
        }
      }
    }

    leaveResetData();
  }, []);

  const onCreateGame = useCallback(async () => {
    try {
      const { data } = await createGame(playerId, NUMBER_OF_PLAYERS);

      if (data) {
        setGameData(data);
        sessionStorage.setItem('gameId', data.id);
        navigate(LOADING);
      }
    } catch (error) {
      //todo: handle errors
    }
  }, [setGameData, playerId, navigate]);

  return (
    <ScreenWrapper>
      <GameTitle />
      <PlayersOnlineTitle />
      {isLoggedIn ? (
        <AfterLogin createGame={onCreateGame} />
      ) : (
        <BeforeLogin createGame={onCreateGame} />
      )}
    </ScreenWrapper>
  );
}

export default Homepage;
