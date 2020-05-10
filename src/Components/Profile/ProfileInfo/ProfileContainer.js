import React from "react";
import {connect} from "react-redux";
import p from "../Profile.module.css";
import Profile from "../Profile";
import {
    getMyPageThunk,
    getPageProfile,
    getStatusThunk,
    setUserProfileAC,
    upDateStatusThunk
} from "../../../redux/ProfileReducer";
import {Redirect, withRouter} from "react-router-dom";
import Login from "../../Login/Login";
import {withAuthRedirect} from "../../../HOC/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {

        let userID = this.props.match.params.userID;
        if (!userID) {
            userID = this.props.autorizedUserId        }
        {
            this.props.getPageProfile(userID);
            this.props.getStatus(userID);

        }
    };

    render() {

        return (
            <Profile {...this.props} profile = {this.props.profile} status = {this.props.status} updatestatus = {this.props.upDateStatus}/>
        )
    }

}

const mapStateToProps = (state) => {
    return {
            profile: state.profilePage.profile,
            status: state.profilePage.status,
            isAuth: state.auth.isAuth,
            autorizedUserId: state.auth.id
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        getPageProfile: (userId) => {
            dispatch(getPageProfile(userId))
        },
        getStatus: (userID) => {
            dispatch(getStatusThunk(userID))
        },
        upDateStatus: (status) => {
            dispatch(upDateStatusThunk(status))
        }
    };
};

export default compose (
    connect(mapStateToProps,mapDispatchToProps),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
