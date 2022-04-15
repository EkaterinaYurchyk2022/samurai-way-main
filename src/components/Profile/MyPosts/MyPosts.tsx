import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator,  updateNewPostTextActionCreator} from "../../../redux/store";
import {ActionsType, PostType} from "../../../redux/store";


type PropsType = {
    posts: Array<PostType>
    dispatch: (action: ActionsType) => void
    newPostText: string

}


const MyPosts = (props: PropsType) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCounts={p.likesCounts}/>)

 /*   let newPostElement = React.createRef<HTMLTextAreaElement>();*/

    let addPost = () => {
        props.dispatch(addPostActionCreator());

    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {

        props.dispatch(updateNewPostTextActionCreator(e.currentTarget.value))
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