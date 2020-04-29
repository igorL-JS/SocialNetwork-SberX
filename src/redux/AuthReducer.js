const SET_USER_DATA = "Set-user-data";

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
};

const authReducer = (state= initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state,
                    ...action.data,
                    isAuth: true}; // деструктуризация, так data из action перезатрет  id, email, login в state

        default :
            return state;

    }
};

export const setUserDataAC = (id, login, email) => {
    return {type: SET_USER_DATA,
            data: {id, login, email}}
    };


export default authReducer





