import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";


let state = {
    posts: [
        {id: 1, message: 'My first count', likesCount: 12},
        {id: 2, message: 'My second count', likesCount: 10},
        {id: 3, message: 'My third count', likesCount: 11},
        {id: 4, message: 'My fours count', likesCount: 156}
    ],};

it('New post should be added', () => {
let action =  addPostActionCreator("Some text");

    // 2. Action
  let  newState =  profileReducer(state, action);
   // 3.  Expectation 
   expect(newState.posts.length).toBe(5) ;
});

it('Some text added to posts', () => {
let action =  addPostActionCreator("Some text");
 // 1. Test data
    // 2. Action
  let  newState =  profileReducer(state, action);
   // 3.  Expectation 
   expect(newState.posts[4].message).toBe("Some text") ;
});



it('After deleting length of messages should be decrement', () => {
let action =  deletePost(1);
    // 2. Action
  let  newState =  profileReducer(state, action);
   // 3.  Expectation 
expect(newState.posts.length).toBe(3) ;
});



it('After deleting length of messages shouldnt be decrement if is incorrect ', () => {
let action =  deletePost(1000);
    // 2. Action
  let  newState =  profileReducer(state, action);
   // 3.  Expectation 
expect(newState.posts.length).toBe(4) ;
});

