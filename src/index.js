import './index.css';
import * as serviceWorker from './serviceWorker';
import state, { subscribe } from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import {addPost, updateNewPostText} from './redux/state';


let rerenderEntireTree = (state) => {

ReactDOM.render(
    <BrowserRouter>
       <App
       state={state} 
       addPost={addPost} 
       updateNewPostText={updateNewPostText} />
    </BrowserRouter>, document.getElementById('root'));
   

}



rerenderEntireTree(state);

subscribe(rerenderEntireTree);


serviceWorker.unregister();