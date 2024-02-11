import userData from "../data/userdata.json"
import transactions from "../data/transactions.json";
import friends from "../data/userdata.json"
import { Profile } from "./Profile/Profile";
// 
//  import { FriendList } from "./Friends/FriendList";



export const App = () => {
  
  return (
    <>
    
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    {/* { <FriendList friends={friends} /> } */}
    </>
  );
};