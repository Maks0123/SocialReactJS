import React from 'react';

import './App.css';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {Route, BrowserRouter} from "react-router-dom";
import UsersContainer from './components/Users/UsersContainer';



const App = (props) => {

  

  return ( 
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Navbar />
        <div class='app-wrapper-content'>

        <Route path='/dialogs' render = { () => <DialogsContainer /> } />

        <Route path='/profile' render = { () =>  <ProfileContainer /> } />


        <Route path='/users' render = { () =>  <UsersContainer /> } />



        
        </div>

    </div>
    </BrowserRouter>
  );
}

export default App;
