import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import {required, maxLengthCreator} from '../../../utils/validators/validators';
import {Textarea} from '../../common/FormsControls/FormsControls';

 const maxLength10 = maxLengthCreator(10);

const MyPosts = (props) => {

   let newPostElement = React.createRef();

  let postElements =  
      props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} /> );
 
   let onAddPost = (values) => {
      props.addPost(values.newPostText);
   }


    return (
       <div className={s.postsBlock}>
            <h3> My post </h3>
            <AddNewPostFormRedux onSubmit={onAddPost} />
             <div className={s.posts}>
                   { postElements }
                </div>
            
       </div>
    );
}

const AddNewPostForm = (props) => {
   return (
         <form onSubmit={props.handleSubmit}>
               <div>
                   <Field name="newPostText" component={Textarea} validate={[required, maxLength10]} placeholder="Post message"/>
               </div>
               <div> 
                   <button >Add post</button>
                </div>
         
             
               
             </form>

   )
}

let AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm"})(AddNewPostForm);

export default MyPosts;
