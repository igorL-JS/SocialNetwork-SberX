import React from "react";
import {connect} from "react-redux";
import * as axios from "axios";
import p from "../Profile.module.css";
import Profile from "../Profile";
import {setUserProfileAC} from "../../../redux/ProfileReducer";
import {withRouter} from "react-router-dom";



class ProfileContainer extends React.Component {



   componentDidMount() {

       let userID = this.props.match.params.userID;
       if (!userID) {
           userID = 2
       }
       axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userID).then(response => {
           this.props.setUserProfile(response.data)
       })
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
        setUserProfile: (profile)=> {
            dispatch(setUserProfileAC(profile))
        }
    };
};


export default connect(mapStateToProps,mapDispatchToProps)(withRouter(ProfileContainer));
