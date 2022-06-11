import React from 'react';
import s from './Post.module.css';

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

const Post = (props: PostsType) => {

    return (
            <div className={s.item}>
                <img
                    src={'http://beloweb.ru/wp-content/uploads/2014/03/Artists-Series-Thomas-Hawk-1.jpeg'} alt={'ava'}/>
                { props.message }
                <div>
                    <span>like</span> { props.likesCount }
                </div>
            </div>
    );
}

export default Post;