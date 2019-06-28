import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div>
          <div className={s.item}>
             <img src='https://content.phuket101.net/wp-content/uploads/20181015165943/phuket-best-beaches-1200x630.jpg' />
          </div>
          <div>
          ava + description
          </div>
         
         <MyPosts />
          
        </div>


    );
}

export default Profile;