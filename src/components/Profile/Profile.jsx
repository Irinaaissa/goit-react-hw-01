import css from "../Profile/Profile.module.css";
  export const Profile =(


    { name,
       tag,
        location,
         avatar = "https://cdn-icons-png.flaticon.com/512/2922/2922506.png" ,
          stats })=>{
   
    return(
      <div className={css.container}>
      <div className={css.profile}>
  <div className={css['personal-info']}>
    <img
      src={avatar}
      alt= "User avatar"className={css.avatar} 
    />
    <p className={css.name}>{name}</p>
    <p className={css.tag}>@{tag}</p>
    <p className={css.location}>{location}</p>
  </div>

  <ul className={css.stats}>
    <li>
      <span className={css.label}>Followers</span>
      <span className={css.value}>{stats.followers}</span>
    </li>
    <li>
      <span className={css.label}>Views</span>
      <span className={css.value}>{stats.views}</span>
    </li>
    <li>
      <span className={css.label}>Likes</span>
      <span className={css.value}>{stats.likes}</span>
    </li>
  </ul>
</div>
</div>
    )
  }
