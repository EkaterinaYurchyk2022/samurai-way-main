import React from 'react';
import s from './MyPosts.module.css';
import Post, {PostsType} from './Post/Post';
import {AddNewPostFormRedux} from './AddNewPostForm/AddNewPostForm';

type PropsType = {
    posts: Array<PostsType>
    messageForNewPost: string
    addPost: (postMessage: string) => void
}

const MyPosts = (props: PropsType) => {

    const postsElements = props.posts.map(p => <Post key={p.id} id={p.id} message={p.message}
                                                     likesCount={p.likesCount}/>)

    const onAddPost = (values: { newPostText: string }) => {
        props.addPost(values.newPostText)
        values.newPostText = ''
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    );
}

export default MyPosts;