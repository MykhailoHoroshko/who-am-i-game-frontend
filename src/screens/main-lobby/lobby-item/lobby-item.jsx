import clsx from 'clsx';
import Btn from '../../../components/btn/btn';
import './lobby-item.scss';

function LobbyItem({
  className,
  theme,
  numberOfPlayers,
  type,
  icon,
  setJoinLobbyModal,
}) {
  const joinLobbyClickHandler = () => {
    if (type === 'Private') {
      setJoinLobbyModal(true);
    }
  };

  return (
    <tr className={clsx('lobby-item', className)}>
      <td className="lobby-item__column">
        {icon && <div className="icon icon-green"></div>}
        {theme}
      </td>
      <td className="lobby-item__column">
        {icon && <div className="icon"></div>}
        {numberOfPlayers}
      </td>
      <td className="lobby-item__column type">
        {icon && <div className="icon"></div>}
        {type}
      </td>
      <td>
        <div className={clsx('btn-wrapper', className)}>
          <Btn
            className="btn-green-solid btn-rounded btn-with-fields"
            onClick={joinLobbyClickHandler}
          >
            JOIN
          </Btn>
        </div>
      </td>
    </tr>
  );
}

export default LobbyItem;
