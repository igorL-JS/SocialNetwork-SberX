import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";
import {combineReducers, createStore} from 'redux';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
});

let store = createStore(reducers);



export default store;