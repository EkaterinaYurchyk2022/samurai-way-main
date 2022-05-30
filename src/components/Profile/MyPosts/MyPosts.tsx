import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {ActionsType, PostType} from "../../../redux/store";
import {MyPostsPropsType} from "./MyPostsContainer";

/*

type PropsType = {
    posts: Array<PostType>
    dispatch: (action: ActionsType) => void
    newPostText: string
    addPost:()=>void
    updateNewPostText:(text:string)=>void

}
*/


const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCounts={p.likesCounts}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = ''
        if (newPostElement.current?.value) text = newPostElement.current?.value
        props.updateNewPostText(text)

    }

    return (
        <div className={s.postsBlock}>
            <h3> My posts </h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
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