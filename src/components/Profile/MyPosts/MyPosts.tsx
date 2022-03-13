import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";


type MyPostPropsType = {
    message: string
    likesCounts: number
}
const MyPosts = (props) => {
    return (
        <div>
            <h3> My posts </h3>
            <div className={s.postsBlock}>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>

                <Post message='Hi, how are you?' likesCounts={15}/>
                <Post message="It's my first post" likesCounts={25}/>


            </div>
        </div>

    );
};
//add smth
export default MyPosts;