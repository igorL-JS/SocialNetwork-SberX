import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";
import usersReducer from "./UsersReducer";
import ToDoReducer from "./ToDoReducer";
import authReducer from "./AuthReducer";
import thunkMiddleware from "redux-thunk";


let redusers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    toDoPage: ToDoReducer,
    auth: authReducer,
});

let store = createStore(redusers,applyMiddleware(thunkMiddleware));
window.store = store;


export default store;
