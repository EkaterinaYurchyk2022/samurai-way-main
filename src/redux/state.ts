import {rerenderEntireTree} from "../render";


type MessageType = {
    id: number
    message: string
}

type DialogsType = {
    id: number
    name: string
}

export type PostType = {
    id: number
    message: string
    likesCounts: number
}

export type ProfilePageType = {
    posts: Array<PostType>
}

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>

}

type SitebarType = {

}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    }

   export const addPost = (postMessage: string)=> {
    const newPost = {
        id: 5,
        message: postMessage,
        likesCounts: 0
    }
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state)
    }
let state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCounts: 15},
            {id: 2, message: "It's my first post", likesCounts: 25}
        ]

    },
    dialogsPage: {
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How is your it-kamasutra?"},
            {id: 3, message: "Yo"},
            {id: 4, message: "Yo"},
            {id: 5, message: "Yo"}
        ],
        dialogs: [
            {id: 1, name: "Ekaterina"},
            {id: 2, name: "Andrey"},
            {id: 3, name: "Anna"},
            {id: 4, name: "Ivan"},
            {id: 5, name: "Sasha"},
            {id: 6, name: "Mariya"},
            {id: 7, name: "Anastasiya"}
        ]
    }

    }

    export default state