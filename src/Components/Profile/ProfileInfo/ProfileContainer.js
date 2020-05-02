import React from "react";
import {connect} from "react-redux";
import * as axios from "axios";
import p from "../Profile.module.css";
import Profile from "../Profile";
import {getMyPageThunk, getPageProfile, setUserProfileAC} from "../../../redux/ProfileReducer";
import {withRouter} from "react-router-dom";
import {UsersAPI} from "../../../API/API";


class ProfileContainer extends React.Component {

   componentDidMount() {

       let userID = this.props.match.params.userID;
       if (!userID) {
           userID = 7604
       }
       this.props.getPageProfile(userID)
   };

    render() {
        return (
            <Profile {...this.props} profile = {this.props.profile}/>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        getPageProfile: (userId) => {
            dispatch(getPageProfile(userId))
        }
    };
};


export default connect(mapStateToProps,mapDispatchToProps)(withRouter(ProfileContainer));
