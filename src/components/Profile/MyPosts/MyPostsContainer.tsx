import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {RootStateType} from '../../../redux/redux-store';
import {Dispatch} from 'redux';
import {PostsType} from './Post/Post';
import {addPostAC} from '../../../redux/profile-reducer';

type mapStateToPropsType = {
    posts: Array<PostsType>
    messageForNewPost: string
}

type mapDispatchToPropsType = {
    addPost: (newPostText: string) => void
}


let mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        messageForNewPost: state.profilePage.messageForNewPost
    }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostAC(newPostText))
        },
    }
}

const MyPostsContainer = connect<mapStateToPropsType, mapDispatchToPropsType, {}, RootStateType>(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;