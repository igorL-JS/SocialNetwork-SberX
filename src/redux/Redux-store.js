import {combineReducers, createStore} from "redux";
import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";
import usersReducer from "./UsersReducer";
import ToDoReducer from "./ToDoReducer";
import authReducer from "./AuthReducer";


let redusers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    toDoPage: ToDoReducer,
    auth: authReducer,
});

let store = createStore(redusers);
window.store = store;


export default store;
