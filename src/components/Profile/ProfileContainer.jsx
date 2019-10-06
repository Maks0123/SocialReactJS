import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {withRouter} from "react-router-dom";
import {getUserProfile} from "../../redux/profile-reducer";
import {Redirect} from "react-router-dom";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from '../../../../../../../Users/Felix/AppData/Local/Microsoft/TypeScript/3.6/node_modules/redux';



class ProfileContainer extends React.Component {

    componentDidMount(){

            let userId = this.props.match.params.userId;     

            if(!userId) {
              userId = 1;
            }
            this.props.getUserProfile(userId);
        }
    
  render() {
    return (
        <div>
        <Profile {...this.props } profile={this.props.profile} />   
        </div>
    );
  }
}


let mapStateToProps = (state) => ({
  profile: state.profilePage.profile, 
});


export default compose(
  connect(mapStateToProps, {getUserProfile}),
  //withAuthRedirect,
  withRouter
)(ProfileContainer)
