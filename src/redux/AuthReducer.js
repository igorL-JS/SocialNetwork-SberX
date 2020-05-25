import {LoginAPI, SecurityAPI, UsersAPI} from "../API/API";
import {stopSubmit} from "redux-form";
const SET_USER_DATA = "Set-user-data";
const GET_CAPTCHA_URL = "Get-captcha-url";

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    captchaUrl: null
};

const authReducer = (state= initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state,
                    ...action.data}; // деструктуризация, так data из action перезатрет  id, email, login в state

        case GET_CAPTCHA_URL:
            return{...state, captchaUrl: action.captchaUrl}; // обновляем значение captchaUrl на полученное с сервера.

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

export const getCaptchaUrlAC = (captchaUrl) => {
    return {type: GET_CAPTCHA_URL, captchaUrl}
};


export const getAuthMe = () => async (dispatch) => {
    let response = await UsersAPI.getAuthMe();
    if (response.resultCode === 0) {
        let {id, login, email} = response.data;
        dispatch(setUserDataAC(id, login, email, true));
    }
};

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await LoginAPI.logIn(email, password, rememberMe,captcha);
    if (response.resultCode === 0) {
        dispatch(getAuthMe());
    } else {
        if (response.resultCode === 10) {
            dispatch(getCaptchaURLThunk())
        }
        debugger;
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

export const getCaptchaURLThunk = () =>  async (dispatch) =>{
    let response = await SecurityAPI.getCaptchaURL();
    dispatch(getCaptchaUrlAC(response.url));
    debugger;

};

export default authReducer






