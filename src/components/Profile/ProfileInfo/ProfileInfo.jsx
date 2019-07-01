import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
            <div>
                <div className={s.item}>
                   <img src='https://content.phuket101.net/wp-content/uploads/20181015165943/phuket-best-beaches-1200x630.jpg' />
                </div>
                <div className={s.descriptionBlock}>
                    ava + description
                </div>
            </div>    
             
    );
}

export default ProfileInfo;