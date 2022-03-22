import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


let posts = [
    {id: 1, message: "Hi, how are you?", likesCounts: 15},
    {id: 2, message: "It's my first post", likesCounts: 25}
]

let dialogs = [
    {id: 1, name: "Ekaterina"},
    {id: 2, name: "Andrey"},
    {id: 3, name: "Anna"},
    {id: 4, name: "Ivan"},
    {id: 5, name: "Sasha"},
    {id: 6, name: "Mariya"},
    {id: 7, name: "Anastasiya"}
]

let messages = [
    {id: 1, message: "Hi"},
    {id: 2, message: "How is your it-kamasutra?"},
    {id: 3, message: "Yo"},
    {id: 4, message: "Yo"},
    {id: 5, message: "Yo"}
]

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages}/>, document.getElementById('root')
);