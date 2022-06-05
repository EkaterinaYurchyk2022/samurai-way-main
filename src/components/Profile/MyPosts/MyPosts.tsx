import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";


type NewPostFormValuesType={
    newPostText:string
}
const maxLength10 = maxLengthCreator(10)

function AddNewPostForm(){
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText" component={Textarea} placeholder='Post message' validate={[required, maxLength10]}/>
            </div>
            <div>
                <button >Add post</button>
            </div>
        </form>
    )
}
let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)


const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCounts={p.likesCounts}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let onAddPost = (values:NewPostFormValuesType) => {
        props.addPost(values.newPostText)
    }
    return (
        <div className={s.postsBlock}>
            <h3> My posts </h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
          <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )

}

export default MyPosts;