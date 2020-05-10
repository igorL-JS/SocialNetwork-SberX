import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import {Route, withRouter} from "react-router-dom";
import Music from "./Components/Music/Music";
import News from "./Components/News/News"
import Settings from "./Components/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ToDoContainer from "./Components/ToDo/ToDoContainer";
import ProfileContainer from "./Components/Profile/ProfileInfo/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import ToDoList from "./Components/ToDoList/ToDoList";
import {connect} from "react-redux";
import {getAuthMe} from "./redux/AuthReducer";
import {initializeApp} from "./redux/AppReducer";
import Preloader from "./Components/Users/Preloader";


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            debugger;
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <Route exact path='/' render={() => (
                    <Profile store={this.props.store}
                             dispatch={this.props.dispatch}
                    />)}/>

                <Route path='/profile/:userID?' render={() => (
                    <ProfileContainer store={this.props.store}
                                      dispatch={this.props.dispatch}
                    />)}/>

                <Route path="/dialogs" render={() => <DialogsContainer store={this.props.store}
                                                                       dispatch={this.props.dispatch}
                />}/>

                <Route path="/music" component={Music}/>
                <Route path="/news" component={News}/>
                <Route path="/settings" component={Settings}/>
                <Route path="/users" render={() => <UsersContainer/>}/>
                <Route path="/tasks" render={() => <ToDoList/>}/>
                <Route path="/login" render={() => <Login/>}/>

            </div>
        );
    }
}

// <Route /> следит за адресной строкой и рендерит компоненету согласно тексту в строке. для передачи props
// используем атрибут render, он принимает только функцию

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAuthMe: () => {
            dispatch(getAuthMe())
        },
        initializeApp: () => {
            dispatch(initializeApp())
        }
    }
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))


