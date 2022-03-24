import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostType} from "../../../redux/state";

type PropsType = {
    posts: Array<PostType>
    addPost: (message: string)=>void

}


const MyPosts = (props: PropsType) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCounts={p.likesCounts}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        let text = newPostElement.current?.value;
        props.addPost(text);
        newPostElement.current.value = "";
    }
    return (
        <div className={s.postsBlock}>
            <h3> My posts </h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
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