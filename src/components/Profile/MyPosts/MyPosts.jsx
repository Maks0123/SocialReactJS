import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

   let posts = [
      {id: 1, message: 'My first count', likesCount: 12},
      {id: 2, message: 'My second count', likesCount: 10},
      {id: 3, message: 'My third count', likesCount: 11},
      {id: 4, message: 'My fours count', likesCount: 156}

  ]

  let postElements =  posts.map( p => <Post message={p.message} likesCount={p.likesCount} /> );

  

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
                  
                  { postElements }
        
                </div>
             </div>
       </div>
    );
}

export default MyPosts;
