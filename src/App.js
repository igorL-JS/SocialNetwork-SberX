import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import {Route} from "react-router-dom";
import Music from "./Components/Music/Music";
import News from "./Components/News/News"
import Settings from "./Components/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ToDoContainer from "./Components/ToDo/ToDoContainer";
import ProfileContainer from "./Components/Profile/ProfileInfo/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";



const App = (props) => {

    return (
        <div className="app-wrapper">
            <HeaderContainer />
            <Navbar/>
            <Route exact path='/' render={() => (
                <Profile store = {props.store}
                         dispatch={props.dispatch}
                />)}/>

            <Route path='/profile/:userID?' render={() => (
                <ProfileContainer store = {props.store}
                         dispatch={props.dispatch}
                />)}/>

            <Route path="/dialogs" render={() => <DialogsContainer store = {props.store}
                                                               dispatch={props.dispatch}
                                                           />}/>

            <Route path="/music" component={Music}/>
            <Route path="/news" component={News}/>
            <Route path="/settings" component={Settings}/>
            <Route path="/users" render={() => <UsersContainer/>} />
            <Route path="/tasks" render = {() => <ToDoContainer/>}/>

        </div>
    );
};
// <Route /> следит за адресной строкой и рендерит компоненету согласно тексту в строке. для передачи props
// используем атрибут render, он принимает только функцию
export default App;