import {ProfilePropsType} from "../components/Profile/Profile";
import {profileAPI, usersAPI} from "../api/api";
import {Dispatch} from "redux";

export const ADD_POST = 'ADD_POST'

export const SET_USER_PROFILE = 'SET_USER_PROFILE'
export const SET_STATUS = 'SET_STATUS'

export type PostsType = {
    id: number
    message: string
    likesCounts: number
}

export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
    profile: any
    status: string
}

export type ActionsType = ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof setUsersProfile>
    | ReturnType<typeof setStatus>

export type InitialStateType=typeof initialState

const initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCounts: 15},
        {id: 2, message: "It's my first post", likesCounts: 25}
    ] as Array<PostsType>,
    profile: null,
    status: ""
}

export const profileReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'ADD_POST': {
            const newPost: PostsType = {
                id: 5,
                message: action.newPostText,
                likesCounts: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }

         case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }

        default:
            return state
    }

}

export const addPostActionCreator = (newPostText:string) => {
    return {
        type: ADD_POST, newPostText
    } as const
}


export const setUsersProfile = (profile: ProfilePropsType) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
}
export const setStatus = (status: string) => {
    return {
        type: SET_STATUS,
        status
    } as const
}


export const getUserProfile = (userId: string) => (dispatch: Dispatch) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUsersProfile(response.data))
        })
}

export const getStatus = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getStatus(+userId)
        .then(response => {
            dispatch(setStatus(response.data))
        })
}
export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}


export default profileReducer