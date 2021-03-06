import React from "react";

import { connect } from "react-redux";

import { withRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";

import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {
  getUserProfile,
  getStatus,
  updateStatus
} from "../../redux/profile-reducer";
import { compose } from "../../../../../../../Users/Felix/AppData/Local/Microsoft/TypeScript/3.6/node_modules/redux";

import Profile from "./Profile";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;

    /* if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId) {
        this.props.history.push("/login");
      }
    } */
    this.props.getUserProfile(userId);
    setTimeout(() => {
      this.props.getStatus(userId);
    }, 1000);
  }

  render() {
    return (
      <div>
        <Profile
          {...this.props}
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.updateStatus}
        />
      </div>
    );
  }
}

let mapStateToProps = state => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status
  //authorizedUserId: state.auth.userId
  // isAuth: state.auth.isAuth
});

export default compose(
  connect(
    mapStateToProps,
    { getUserProfile, getStatus, updateStatus }
  ),
  //withAuthRedirect,
  withRouter
)(ProfileContainer);
