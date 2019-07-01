import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
    return ( <div className={s.item}>
            <img src='https://img1.liveinternet.ru/images/attach/c/4/82/507/82507365_Avatar_by_Eggar919.jpg'/>
              { props.message }
            <div>
               <span>like {props.likesCount}</span>
            </div> 
        
            </div> 
    );
}

export default Post;