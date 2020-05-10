import * as serviceWorker from "./serviceWorker";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/Redux-store";
import ReactDOM from "react-dom";
import App from "./App";


ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <App store={store} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>
    </Provider>)
    , document.getElementById("root"));

serviceWorker.unregister();


