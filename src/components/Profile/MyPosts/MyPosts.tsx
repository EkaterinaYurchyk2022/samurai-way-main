import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";



type MyPostPropsType = {
    message: string
    likesCounts: number
}
const MyPosts: React.FC<MyPostPropsType> = (props) => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>

            </div>
            <div className={s.posts}>

                <Post message='Hi, how are you?' likesCounts={15}/>
                <Post message="It's my first post" likesCounts={25}/>



            </div>
        </div>

    );
};

export default MyPosts;