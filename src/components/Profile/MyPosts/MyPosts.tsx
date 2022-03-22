import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

/*

type MyPostPropsType = {
    message: string
    likesCounts: number
}
*/

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCounts={p.likesCounts}/>)
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
                {postsElements}
            </div>
        </div>
    )
        ;
};

export default MyPosts;