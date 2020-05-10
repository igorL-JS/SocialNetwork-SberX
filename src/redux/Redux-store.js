import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";
import usersReducer from "./UsersReducer";
import ToDoReducer from "./ToDoReducer";
import authReducer from "./AuthReducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import loginReducer from "./LoginReducer";
import {appReducer} from "./AppReducer";


let redusers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    toDoPage: ToDoReducer,
    auth: authReducer,
    form: formReducer,
    login: loginReducer,
    app:appReducer
});

let store = createStore(redusers,applyMiddleware(thunkMiddleware));
window.store = store;


export default store;
