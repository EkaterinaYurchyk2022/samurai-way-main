import React from 'react';
import s from './Message.module.css'

 export type MessageType = {
    id: number
    message: string
}

const Message = (props: MessageType) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}


export default Message;