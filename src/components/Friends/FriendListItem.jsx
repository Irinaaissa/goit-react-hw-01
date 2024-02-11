import css from './FriendListItem.module.css';
import clsx from 'clsx';

const getStatusClass = isOnline =>
  clsx(css.status, {
    [css.online]: isOnline,
    [css.offline]: !isOnline,
  });

export const FriendListItem = ({ friend }) => {
    const { avatar, name, isOnline } = friend;
  return (
    <div className={css.item}>
      <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={getStatusClass(isOnline)}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};
