import React from 'react';
import s from './Dialogs.module.css'
import DialogItem, {DialogsType} from './DialogItem/DialogItem';
import Message, {MessageType} from './Message/Message';
import {Redirect} from 'react-router-dom';
import {AddMessageFormRedux} from './AddMessageForm/AddMessageForm';

type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    newMessageBody: string
    sendMessage: (values: string) => void
    isAuth: boolean
}

const Dialogs = (props: DialogsPageType) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id} avatar={d.avatar}/>);

    let messagesElements = props.messages.map(m => <Message key={m.id} id={m.id} message={m.message}/>);

    let addNewMessage = (values: { newMessageBody: string }) => {
        props.sendMessage(values.newMessageBody);
        values.newMessageBody = '';
    }

    if (!props.isAuth) return <Redirect to={'/login'}/>;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    );
};


export default Dialogs;