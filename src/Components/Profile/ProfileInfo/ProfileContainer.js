import React from "react";
import {connect} from "react-redux";
import p from "../Profile.module.css";
import Profile from "../Profile";
import {
    changeData,
    getMyPageThunk,
    getPageProfile,
    getStatusThunk, savePhoto,
    setUserProfileAC,
    upDateStatusThunk
} from "../../../redux/ProfileReducer";
import {Redirect, withRouter} from "react-router-dom";
import Login from "../../Login/Login";
import {withAuthRedirect} from "../../../HOC/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    refreshProfile() {
        let userID = this.props.match.params.userID;
        if (!userID) {
            userID = this.props.autorizedUserId
        }
        {
            this.props.getPageProfile(userID);
            this.props.getStatus(userID);
        }
    }

    componentDidMount() {
        this.refreshProfile()
    };

    render() {

        return (
            <Profile {...this.props} isOwner ={!this.props.match.params.userID} savePhoto={this.props.savePhoto} profile={this.props.profile} status={this.props.status}
                     updatestatus={this.props.upDateStatus}/>
        )
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userID !== prevProps.match.params.userID)
            this.refreshProfile()
    }
}

const mapStateToProps = (state) => {
    return {
            profile: state.profilePage.profile,
            status: state.profilePage.status,
            isAuth: state.auth.isAuth,
            autorizedUserId: state.auth.id,

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
        },
        savePhoto: (file) => {
            dispatch(savePhoto(file))
        },
        changeData: (profile) => {
            dispatch (changeData(profile))
        }

    };
};

export default compose (
    connect(mapStateToProps,mapDispatchToProps),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
