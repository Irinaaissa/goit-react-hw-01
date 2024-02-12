import { FriendListItem } from './FriendListItem';
import css from "./FriendList.module.css";






export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendsList}>
      {friends.map(friend => (
        <li key={friend.id}>
          <FriendListItem friend={friend}  />
        </li>
      ))}
    </ul>
  );
};