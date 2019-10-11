import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {Route, BrowserRouter} from "react-router-dom";
import UsersContainer from './components/Users/UsersContainer';
import LoginPage from './components/Login/Login';
import { connect } from 'react-redux';
import {getAuthUserData} from "./redux/auth-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";

class App  extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
    }

  render() {
  /*  if(!this.props.initilized){
        return <Preloader />
    } */
  return ( 
    <div className='app-wrapper'>
      <HeaderContainer />
      <Navbar />
        <div class='app-wrapper-content'>

        <Route path='/dialogs' render = { () => <DialogsContainer /> } />

        <Route path='/profile/:userId?' 
               render={ () =>  <ProfileContainer /> }/>

        <Route path='/users' render = { () =>  <UsersContainer /> } />

        <Route path='/login' render = { () =>  <LoginPage /> } />

        </div>

    </div>
      );
    }
  }

  const mapStateToProps = (state) => ({
    initialized: state.app.initialized
  })

export default compose(
        withRouter, 
        connect (mapStateToProps, {initializeApp})) (App);


