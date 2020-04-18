import * as serviceWorker from "./serviceWorker";
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./redux/Redux-store";
import {Provider} from "react-redux";


let reRenderEntireTree = () => {
    ReactDOM.render((
        <BrowserRouter>
            <Provider store={store}>
                <App store={store} dispatch={store.dispatch.bind(store)}/>
            </Provider>
        </BrowserRouter>), document.getElementById('root'));
};

reRenderEntireTree(store.getState());


store.subscribe((state) => {

    reRenderEntireTree(state);
});



serviceWorker.unregister();


