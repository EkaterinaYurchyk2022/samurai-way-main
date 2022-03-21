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
    let dialogsData = [
        {id: 1, name: "Ekaterina"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Anna"},
        {id: 4, name: "Ivan"},
        {id: 5, name: "Sasha"},
        {id: 6, name: "Mariya"},
        {id: 7, name: "Anastasiya"}
    ]

    let messageData = [
        {id: 1, message:"Hi"},
        {id: 2, message:"How is your it-kamasutra?"},
        {id: 3, message:"Yo"},
        {id: 4, message:"Yo"},
        {id: 5, message:"Yo"}
        ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>


            </div>
            <div className={s.messages}>
                <Message message={messageData[0].message}/>
                <Message message={messageData[1].message}/>
                <Message message={messageData[2].message}/>
                <Message message={messageData[3].message}/>
                <Message message={messageData[4].message}/>
            </div>
        </div>
    );
};

export default Dialogs;