import React from "react";

import * as axios from "axios";

import { connect } from "react-redux";

import { usersAPI } from "../../api/api";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingProgress,
  getUsers
} from "../../redux/users-reducer";
import {
  getUserss,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getFollowingInProgress,
  getUsersSuperSelector
} from "../../redux/users-selectors";
import Preloader from "../common/Preloader/Preloader";
import { compose } from "../../../../../../../Users/Felix/AppData/Local/Microsoft/TypeScript/3.6/node_modules/redux";

import Users from "./Users";
import styles from "./users.module.css";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }
  onPageChanged = pageNumber => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        {/*this.props.isFetching ? <Preloader /> : null */}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          FollowingProgress={this.props.FollowingProgress}
        />
      </>
    );
  }
}

let mapStateToProps = state => {
  return {
    users: getUserss(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  };
};

/*

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
*/

export default compose(
  // withAuthRedirect,
  connect(
    mapStateToProps,
    { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers }
  )
)(UsersContainer);
