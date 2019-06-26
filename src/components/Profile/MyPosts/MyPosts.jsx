import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
    return (
       <div>
           My post
             <div>
                <textarea></textarea>
                <button>Add post</button>
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
