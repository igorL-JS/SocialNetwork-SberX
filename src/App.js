import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import Music from "./Components/Music/Music";
import News from "./Components/News/News"
import Settings from "./Components/Settings/Settings";
import {upDateMessage, upDateNewPostText} from "./redux/state";


const App = (props) => {
debugger;
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <Route exact path="/" render={() => (
                <Profile post={props.state.profilePage.Posts}
                         dispatch={props.dispatch}
                         posttext={props.state.profilePage.newPostText}
                />)}/>

            <Route path="/profile" render={() => (
                <Profile post={props.state.profilePage.Posts}
                         dispatch={props.dispatch}
                         posttext={props.state.profilePage.newPostText}
                 />)}/>

            <Route path="/dialogs" render={() => (<Dialogs dialog={props.state.dialogsPage.DialogData}
                                                           messages={props.state.dialogsPage.MessageData}
                                                               dispatch={props.dispatch}
                                                           messagetext={props.state.dialogsPage.newMessageText}/>)}/>

            <Route path="/music" component={Music}/>
            <Route path="/news" component={News}/>
            <Route path="/settings" component={Settings}/>
        </div>
    );
};
// <Route /> следит за адресной строкой и рендерит компоненету согласно тексту в строке. для передачи props
// используем атрибут render, он принимает только функцию
export default App;