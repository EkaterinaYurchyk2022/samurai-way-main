import React from 'react';
import {addPostActionCreator,StoreType} from "../../../redux/redux-store";
import {ActionsType, PostType} from "../../../redux/redux-store";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {PostsType} from "../../../redux/profile-reducer";
import {Dispatch} from "redux";


type PropsType = {
    posts: Array<PostType>
    dispatch: (action: ActionsType) => void
    updateNewPostText: (text: string) => void
    store: StoreType

}

type mapStateToPropsType = {
    posts: Array<PostsType>
    newPostText: string
}

type mapDispatchToPropsType = {
    addPost: (newPostText: string) => void
}

export type MyPostsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts,

    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;