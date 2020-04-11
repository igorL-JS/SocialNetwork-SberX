import React from "react";
import p from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {addMessageActionCreator, upDateMessageActionCreator} from "../../redux/DialogsReducer";

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

const Dialogs = (props) => {

    let DialogsElement = props.dialog.map((dialog) => {
            return (<DialogItem name={dialog.name} id={dialog.id}/>)
        }
    );


    let MessageElement = props.messages.map((m) => {
            return (<Message message={m.message}/>)
        }
    );

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
        props.dispatch(upDateMessageActionCreator(""));
    };

    let onChangeMessage = (e) => {
        let text = e.target.value;
        props.dispatch(upDateMessageActionCreator(text));
    };

    return (
        <div>
            <img src="/shapka.jpg" width="1000" heigth="40"/>


            <div className={p.dialogs}>
                <div className={p.dialogItem}>
                    {DialogsElement}
                </div>

                <div className={p.messages}>
                    {MessageElement}

                    <div className={p.textarea}>
                        <div>
                            <textarea onChange={onChangeMessage} rows="3" cols="70" value={props.messagetext}/>
                        </div>
                        <div>
                            <input onClick={addMessage} type="submit" value="Send message">
                            </input>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};
export default Dialogs;
