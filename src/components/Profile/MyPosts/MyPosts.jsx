import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';



const MyPosts = (props) => {

   let newPostElement = React.createRef();

  let postElements =  
      props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} /> );
 
   let onAddPost = () => {
      props.addPost();
   }

   let onPostChange = () => {
      let text = newPostElement.current.value;
      props.updateNewPostText(text);
     
   }

    return (
       <div className={s.postsBlock}>
            <h3> My post </h3>
             <div>
               <div>
                   <textarea onChange={onPostChange}
                   ref={newPostElement} 
                   value={props.newPostText}
                   placeholder='Enter your message'
                    />
               </div>
               <div> 
                   <button onClick={onAddPost }>Add post</button>
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
