import {ActionsType, ProfilePageType} from "./store";

export const ADD_POST = 'ADD_POST'

export const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

let initialState={
    posts: [
        {id: 1, message: "Hi, how are you?", likesCounts: 15},
        {id: 2, message: "It's my first post", likesCounts: 25}
    ],
    newPostText: "it-kamasutra.com"
}

const profileReducer = (state= initialState, action: ActionsType) => {
    switch (action.type) {
        case 'ADD_POST':
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCounts: 0
            };
            state.posts.push(newPost);
            state.newPostText = ''
            return state

        case
        UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }

}
/*

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (newText: string) => ({
    type: UPDATE_NEW_POST_TEXT, newText: newText})
*/





export default profileReducer