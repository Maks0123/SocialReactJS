import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    /* if (!props.profile){
         return <Preloader />
     } */

    return (
            <div>
                <div className={s.item}>
                   <img src='https://content.phuket101.net/wp-content/uploads/20181015165943/phuket-best-beaches-1200x630.jpg' />
                </div>
                <div className={s.descriptionBlock}>
                      <img src='http://vseprosto.com/cms_content/uploads/vseprosto_com/avatarka.jpg'
                      /*props.profile.photos.large */  />
                    <ProfileStatus status={"Hello my friends"}/>
                </div>
            </div>    
             
    );
}

export default ProfileInfo;