/*
import {LoginAPI} from "../API/API";

const LOGIN = "Login";

let initialState  = {
    userId : null,
    email: null,
    password: null,
    rememberMe: false
};


const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {...state, ...action.data};
        default:
            return state

    }
};


export const LoginAC = (email, password, rememberMe) => {
    return {
        type: LOGIN,
        data: {email, password, rememberMe}
    }
};

export const LoginThunk = (email, password, rememberMe) => (dispatch) => {
    LoginAPI.logIn(email, password, rememberMe).then(data => {
        if (data.resultCode === 0) {
            let {email, password, rememberMe} = data.data;
            debugger;
            dispatch(LoginAC(email, password, rememberMe))
            debugger;
        }})
};

export default loginReducer;
*/


