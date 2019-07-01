import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
    return (
       <div className={s.postsBlock}>
            <h3> My post </h3>
             <div>
               <div>
                   <textarea></textarea>
               </div>
               <div> 
                   <button>Add post</button>
                </div>
             </div>

             <div>
                <div className={s.posts}>
                   
                <Post message='Hi, this is my first post' />
                <Post message='Hi, this is my first post' />
                <Post message='Hi, this is my first post' />

                </div>
             </div>
       </div>
    );
}

export default MyPosts;
