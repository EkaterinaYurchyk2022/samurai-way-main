import React from 'react';
import {store} from "./redux/redux-store";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter} from "react-router-dom";


let rerenderEntireTree = () => {

    ReactDOM.render(
        <HashRouter>
            <App
                dispatch={store.dispatch.bind(store)}
                state={store.getState()}

            />
        </HashRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree()

store.subscribe(() => {
    rerenderEntireTree()
})

