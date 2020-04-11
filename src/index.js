import * as serviceWorker from "./serviceWorker";
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
//import store from "./redux/state";
import store from "./redux/Redux-store";


let reRenderEntireTree = (state) => {
    debugger;
    ReactDOM.render((<BrowserRouter><App state={store.getState()}
                                         dispatch={store.dispatch.bind(store)}/>
    </BrowserRouter>), document.getElementById('root'));

};

reRenderEntireTree(store.getState());


store.subscribe(() => {
    let state = store.getState();
    reRenderEntireTree(state);
});

/**/
serviceWorker.unregister();


