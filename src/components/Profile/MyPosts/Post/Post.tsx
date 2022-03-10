import React from 'react';
import s from './Post.module.css';


type PostPropsType = {
    message: string
    likesCounts: number
}
const Post = (props: PostPropsType) => {
         return (
            <div className={s.item}>
                <img
                    src='http://beloweb.ru/wp-content/uploads/2014/03/Artists-Series-Thomas-Hawk-1.jpeg'/>
                {props.message}
                <div>
                    <span> like</span> {props.likesCounts}
                </div>
            </div>
        );
  };
    export default Post;