import {LoginAPI, UsersAPI} from "../API/API";
import {stopSubmit} from "redux-form";
const SET_USER_DATA = "Set-user-data";

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
};

const authReducer = (state= initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state,
                    ...action.data}; // деструктуризация, так data из action перезатрет  id, email, login в state

        default :
            return state;

    }
};

export const setUserDataAC = (id, login, email, isAuth) => {
    return {
        type: SET_USER_DATA,
        data: {id, login, email, isAuth}
    }
};

export const getAuthMe = () => async (dispatch) => {
    let response = await UsersAPI.getAuthMe();
    if (response.resultCode === 0) {
        let {id, login, email} = response.data;
        dispatch(setUserDataAC(id, login, email, true));
    }
};

export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await LoginAPI.logIn(email, password, rememberMe);
    if (response.resultCode === 0) {
        dispatch(getAuthMe());
    } else {
        let message = (response.messages.length > 0) ? (response.messages) : ("Common error");
        dispatch(stopSubmit("Login", {_error: message}));
    }
};

export const logout = () => async (dispatch) => {
    let response = await LoginAPI.logOut();
    if (response.resultCode === 0) {
        dispatch(setUserDataAC(null, null, null, false))
    }


};

export default authReducer






