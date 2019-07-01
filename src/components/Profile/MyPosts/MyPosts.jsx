import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

   let postData = [
      {id: 1, message: 'My first count', likesCount: 12},
      {id: 2, message: 'My second count', likesCount: 10},
      {id: 3, message: 'My third count', likesCount: 11},

  ]

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
                   
                <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
                <Post message={postData[1].message} likesCount={postData[1].likesCount}/>
        
                </div>
             </div>
       </div>
    );
}

export default MyPosts;
