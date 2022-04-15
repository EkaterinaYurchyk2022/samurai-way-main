import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialodItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/store";
import {ActionsType, DialogsPageType} from "../../redux/store";


type DialogsPagePropsType = {
    state: DialogsPageType
    dispatch: (action: ActionsType)=>void
}



const Dialogs = (props: DialogsPagePropsType) => {



    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>)
    let newMessageBody = props.state.newMessageBody

    let onMessageClick = () => {
        props.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.dispatch(updateNewMessageBodyCreator(body))
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}


            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <textarea value={newMessageBody}
                              onChange={onNewMessageChange} placeholder='Enter your message'>

                    </textarea>
                </div>
                <div>
                    <button onClick={onMessageClick}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;