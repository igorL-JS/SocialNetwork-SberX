import React from "react";
import "./Header.css";
import {connect} from "react-redux";
import {setUserDataAC} from "../../redux/AuthReducer";
import Header from "./Header";
import * as axios from "axios";


class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
                   {withCredentials: true} ).then(response => {
                       debugger;
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                this.props.setUserData(id, login, email);
            }
        });

    }
    render() {
        return <Header {...this.props}/>
    }
}



const mapStateToProps = (state) => {
    debugger;
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setUserData: (id, login, email) => {
            dispatch(setUserDataAC(id, login, email))
        }
    }
};



export default connect (mapStateToProps,mapDispatchToProps)(HeaderContainer)