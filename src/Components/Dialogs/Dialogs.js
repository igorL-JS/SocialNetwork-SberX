import React from "react";
import p from "./Dialogs.module.css";
import {NavLink, Redirect} from "react-router-dom";
import DialogsContainer from "./DialogsContainer"
import {FormDialogsRedux} from "./FormDialogs";

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

    const onSubmit = (formData) => {
        return (props.addMessage(formData.textarea)
        )

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
                    <FormDialogsRedux onSubmit={onSubmit}/>
                </div>
            </div>
        </div>
    );
};
export default Dialogs;
