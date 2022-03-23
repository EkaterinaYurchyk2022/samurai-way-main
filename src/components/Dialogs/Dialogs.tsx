import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialodItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/state";


type MessagePropsType = {
    message: string
}


type DialogsPagePropsType = {
       state: DialogsPageType
}


const Dialogs = (props:DialogsPagePropsType) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>)

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

export default Dialogs;