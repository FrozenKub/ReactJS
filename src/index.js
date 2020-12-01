import React from "react";
import ReactDOM from "react-dom";

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers/rootReducer'

import Main from "./Main.jsx"
import './styles/style.css'


export const store = createStore(rootReducer, [])

ReactDOM.render(
    <Provider store={store}>
        <Main/>
    </Provider>
    , document.getElementById("root"));
