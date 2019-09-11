import React from 'react';

import './App.css';

import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {Route, BrowserRouter} from "react-router-dom";
import UsersContainer from './components/Users/UsersContainer';



const App = () => {
  return ( 
    
    <div className='app-wrapper'>
      <HeaderContainer />
      <Navbar />
        <div class='app-wrapper-content'>

        <Route path='/dialogs' render = { () => <DialogsContainer /> } />

        <Route path='/profile/:userId?' 
               render={ () =>  <ProfileContainer /> }/>

        <Route path='/users' render = { () =>  <UsersContainer /> } />

        </div>

    </div>
    
  );
}

export default App;
