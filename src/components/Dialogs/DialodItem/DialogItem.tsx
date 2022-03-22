import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './../Dialogs.module.css'

/*type DialogItemPropsType = {
    name: string
    id: number
}*/
const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}


/*
type DialogsPropsType = {
    name: DialogItemPropsType
    id: DialogItemPropsType
}


const Dialogs = (props: DialogsPropsType) => {
    let dialogs = [
        {id: 1, name: "Ekaterina"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Anna"},
        {id: 4, name: "Ivan"},
        {id: 5, name: "Sasha"},
        {id: 6, name: "Mariya"},
        {id: 7, name: "Anastasiya"}
    ]

    let messages = [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your it-kamasutra?"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"}
    ]
    let dialogsElements = dialogs.map(d=><DialogItem name={d.name} id={d.id}/>)
    let messagesElements = messages.map(m=><Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}


            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};
*/

export default DialogItem;