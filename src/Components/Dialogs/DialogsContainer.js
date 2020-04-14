import React from "react";
import p from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {addMessageActionCreator, upDateMessageActionCreator} from "../../redux/DialogsReducer";
import Dialogs from "./Dialogs";


/*

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={p.dialog}>
            <NavLink to={path} activeClassName={p.activeLink}> {props.name} </NavLink>
        </div>
    );
};


const Message = (props) => {
    return (
        <div className={p.message}> {props.message}</div>
    );
};

*/


const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;

/*    let DialogsElement = props.dialog.map((dialog) => {
            return (<DialogItem name={dialog.name} id={dialog.id}/>)
        }
    );


    let MessageElement = props.messages.map((m) => {
            return (<Message message={m.message}/>)
        }
    );*/

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
        props.dispatch(upDateMessageActionCreator(""));
    };

    let onChangeMessage = (text) => {
        props.dispatch(upDateMessageActionCreator(text));
    };

    return (<Dialogs  dialog={state.DialogData}
                      messages={state.MessageData}
                      addmessage = {addMessage}
                      onchangemessage = {onChangeMessage}
                      messagetext={state.newMessageText}/>);

};
export default DialogsContainer;
