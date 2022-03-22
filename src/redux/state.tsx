import exp from "constants";

let state = {
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