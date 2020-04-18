import React from "react";
import {addMessageActionCreator, upDateMessageActionCreator} from "../../redux/DialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        messagetext: state.dialogsPage.newMessageText,
        dialog: state.dialogsPage.DialogData,
        messages: state.dialogsPage.MessageData
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

        addmessage: () => {
            dispatch(addMessageActionCreator());
            dispatch(upDateMessageActionCreator(""))
        },

        onchangemessage: (text) => {
            dispatch(upDateMessageActionCreator(text))
        },
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;
