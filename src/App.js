import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import {Route} from "react-router-dom";
import Music from "./Components/Music/Music";
import News from "./Components/News/News"
import Settings from "./Components/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";


const App = (props) => {
debugger;
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <Route exact path="/" render={() => (
                <Profile store = {props.store}
                         dispatch={props.dispatch}
                />)}/>

            <Route path="/profile" render={() => (
                <Profile store = {props.store}
                         dispatch={props.dispatch}
                />)}/>

            <Route path="/dialogs" render={() => (<DialogsContainer store = {props.store}
                                                               dispatch={props.dispatch}
                                                           />)}/>

            <Route path="/music" component={Music}/>
            <Route path="/news" component={News}/>
            <Route path="/settings" component={Settings}/>
        </div>
    );
};
// <Route /> следит за адресной строкой и рендерит компоненету согласно тексту в строке. для передачи props
// используем атрибут render, он принимает только функцию
export default App;