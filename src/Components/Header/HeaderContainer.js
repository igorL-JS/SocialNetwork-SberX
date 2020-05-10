import React from "react";
import "./Header.css";
import {connect} from "react-redux";
import {getAuthMe, logout, setUserDataAC} from "../../redux/AuthReducer";
import Header from "./Header";


class HeaderContainer extends React.Component {

    render() {
        return <Header {...this.props}/>
    }
}


const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,

    }
};

const mapDispatchToProps = (dispatch) => {
    return {

        logout: () => {
            dispatch(logout())
        }
    }
};



export default connect (mapStateToProps,mapDispatchToProps)(HeaderContainer)