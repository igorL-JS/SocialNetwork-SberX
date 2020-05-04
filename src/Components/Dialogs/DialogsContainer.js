import React from "react";
import {addMessageActionCreator, upDateMessageActionCreator} from "../../redux/DialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        messagetext: state.dialogsPage.newMessageText,
        dialog: state.dialogsPage.DialogData,
        messages: state.dialogsPage.MessageData,

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

//const AuthRedirectComponent = withAuthRedirect(Dialogs);

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
