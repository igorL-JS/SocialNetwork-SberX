import React from "react";
import {getAuthMe} from "./AuthReducer";

const INITIALIZE_SUCCESS = "Initialize-success" ;

let initialState = {
    initialized: false
};


export const appReducer = (state=initialState, action) => {
    switch (action.type) {
        case INITIALIZE_SUCCESS:
            return {...state,
                initialized: true};
        default:
            return state;
    }
};


export const initializeAC = () => {
    return {type: INITIALIZE_SUCCESS};
};

export const initializeApp = ()=> (dispatch) =>{
    let promise = dispatch(getAuthMe());
    promise.then( () => dispatch(initializeAC()))
};





