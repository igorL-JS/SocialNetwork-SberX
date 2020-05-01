import React from "react";
import "./Header.css";
import {connect} from "react-redux";
import {setUserDataAC} from "../../redux/AuthReducer";
import Header from "./Header";
import {UsersAPI} from "../../API/API";


class HeaderContainer extends React.Component {
    componentDidMount() {
        UsersAPI.getAuthMe().then(data => {
                       if (data.resultCode === 0) {
                let {id, login, email} = data.data;
                this.props.setUserData(id, login, email);
            }
        });

    }
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
        setUserData: (id, login, email) => {
            dispatch(setUserDataAC(id, login, email))
        }
    }
};



export default connect (mapStateToProps,mapDispatchToProps)(HeaderContainer)