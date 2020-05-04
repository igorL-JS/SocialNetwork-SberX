import React from "react";
import "./Header.css";
import {connect} from "react-redux";
import {getAuthMe, setUserDataAC} from "../../redux/AuthReducer";
import Header from "./Header";


class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthMe();
        /*UsersAPI.getAuthMe().then(data => {
                       if (data.resultCode === 0) {
                let {id, login, email} = data.data;
                this.props.setUserData(id, login, email);
            }
        });*/

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
        getAuthMe: () => {
            dispatch(getAuthMe())
        }
    }
};



export default connect (mapStateToProps,mapDispatchToProps)(HeaderContainer)