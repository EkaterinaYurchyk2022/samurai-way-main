import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css'

type DialogItemPropsType = {
    name: string
    id: number
}
const DialogItem = (props: DialogItemPropsType) => {
    let path = "/dialogs/" + props.id;
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}
type MessagePropsType = {
    message: string
}

const Message = (props: MessagePropsType) => {
    return <div className={s.dialog}>{props.message}</div>
}

type DialogsPropsType = {
    name: DialogItemPropsType
    id: DialogItemPropsType
}

const Dialogs = (props: DialogsPropsType) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Ekaterina" id={1}/>
                <DialogItem name="Andrey" id={2}/>
                <DialogItem name="Anna" id={3}/>
                <DialogItem name="Ivan" id={4}/>
                <DialogItem name="Sasha" id={5}/>
                <DialogItem name="Mariya" id={6}/>
                <DialogItem name="Anastasiya" id={7}/>

            </div>
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="How is your it-kamasutra?"/>
                <Message message="Yo"/>
                <Message message="Yo"/>
                <Message message="Yo"/>
            </div>
        </div>
    );
};

export default Dialogs;