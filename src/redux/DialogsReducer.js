const ADD_MESSAGE = "Add-Message";

let initialState = {
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
    newMessageText: "Start a conversation ...",
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state, MessageData: [...state.MessageData, {id: 5, message: action.newMessageText}]
            }
        }
        default :
            return state
    }
};

export const addMessageActionCreator = (text) => {
    return {type: ADD_MESSAGE,
            newMessageText:text}
};

export default dialogsReducer;
