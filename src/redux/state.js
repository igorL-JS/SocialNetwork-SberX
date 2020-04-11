/*

import React from "react";
import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";


let store = {
    _state: {
        profilePage: {
            Posts: [
                {id: 1, messages: "Hi, everyone! I use SberX", likecount: 30},
                {id: 2, messages: "Hi, that's my first post", likecount: 24},
            ],
            newPostText: "What's new ?",
        },

        dialogsPage: {
            DialogData: [
                {id: 1, name: "Vasiliy Chesnokov"},
                {id: 2, name: "Dmitriy Holin"},
                {id: 3, name: "Viktor Polivalov"},
                {id: 4, name: "Sergey Makarov"},
                {id: 5, name: "Yuriy Suetkin"},
            ],
            MessageData: [
                {id: 1, message: "Hi, how are you?"},
                {id: 2, message: "Hello, dude!"},
                {id: 3, message: "Buddy, are you here?"},
            ],
            newMessageText: "Start a conversation ..."
        },
    },

    _callSubscriber() {
        console.log("state was opened")
    },

    getState() {
        return this._state; //передаем State
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    },

};


//export default store;
*/
