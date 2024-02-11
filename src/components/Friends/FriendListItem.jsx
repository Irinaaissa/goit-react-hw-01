import css from './FriendListItem.module.css';
import clsx from 'clsx';

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
    return (
        <div>
            <img className={css.image} src={avatar} alt="Avatar" width="48" />
            <p>{name}</p>
            <p className={css.clsx(isOnline ? online : offline)}>
                {isOnline ? 'Online' : 'Offline'}
            </p>
        </div>
    );
};