const ADD_MESSAGE = "Add-Message";
const UP_DATE_MESSAGE = "Up-Date-Message";

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

const dialogsReducer = (state=initialState,action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let copyState = {...state};

            let newMessage = {
                id: 5,
                message: state.newMessageText,
            };
            copyState.MessageData = [...state.MessageData];
            copyState.MessageData.push(newMessage);
            return copyState;
        }
        case UP_DATE_MESSAGE : {
            let copyState = {... state};
            copyState.newMessageText = action.text;
            return copyState;
        }
        default : return state
    }
};

export const addMessageActionCreator = () => {
    return {type: ADD_MESSAGE}
};

export const upDateMessageActionCreator = (text) => {
    return {type: UP_DATE_MESSAGE,
            text: text,
    }
};
export default dialogsReducer;
