import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";


type MyPostPropsType = {
    message: string
    likesCounts: number
}
const MyPosts = () => {
    let postData = [
        {id: 1, message: "Hi, how are you?", likesCounts: 15},
        {id: 2, message: "It's my first post", likesCounts: 25}
    ]
    return (
        <div className={s.postsBlock}>
            <h3> My posts </h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>

            <div className={s.posts}>
                <Post message={postData[0].message} likesCounts={postData[0].likesCounts}/>
                <Post message={postData[1].message} likesCounts={postData[1].likesCounts}/>
            </div>
        </div>
    )
        ;
};

export default MyPosts;