import {ActionsType, ProfilePageType} from "./state";

export const ADD_POST = 'ADD_POST'

export const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

const profileReducer = (state: ProfilePageType, action: ActionsType) => {
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