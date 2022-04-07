import React from 'react';
import state, {subscribe} from "./redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, StateType, updateNewPostText} from "./redux/state";
import {BrowserRouter, HashRouter} from "react-router-dom";


let rerenderEntireTree = () => {

    ReactDOM.render(
        <HashRouter>
        <App
        updateNewPostText={updateNewPostText}
        state={state}
        addPost={addPost}/>
        </HashRouter>,
        document.getElementById('root')

    );
}

rerenderEntireTree()

subscribe(rerenderEntireTree)

