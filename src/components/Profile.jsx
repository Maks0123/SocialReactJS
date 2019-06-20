import React from 'react';
import s from './Profile.module.css';


const Profile = () => {
    return (
        <div className={s.content}>
          <div>
             <img src='https://content.phuket101.net/wp-content/uploads/20181015165943/phuket-best-beaches-1200x630.jpg' />
          </div>
          <div>
          ava + description
          </div>

          <div>
            My post
            <div className={s.item}>New post</div>
            <div className={s.item}>Post1</div>
            <div className={s.item}>Post2</div>
          </div>
        </div>


    );
}

export default Profile;