import {
  updateNewPostTextActionCreator,
  addPost,
} from "../../redux/profile-reducer";
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import React from "react";
import { setUsersProfile } from "../../redux/profile-reducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let profileId = this.props.router.params.profileId;
    alert(profileId);
    debugger;
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then((response) => {
        this.props.setUsersProfile(response.data);
      });
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
    profile: state.profilePage.profile,
  };
};

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

export default connect(mapStateToProps, {
  updateNewPostTextActionCreator,
  addPost,
  setUsersProfile,
})(withRouter(ProfileContainer));
