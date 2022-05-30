import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialodItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {Navigate} from "react-router-dom";
import {InitialStateType} from "../../redux/dialogs-reducer";


/*type DialogsPagePropsType = {
    state: DialogsPageType
    dispatch: (action: ActionsType)=>void
    store:StoreType

}*/
type PropsType = {
    dialogsPage: InitialStateType
    sendMessage: (messageText: string) => void
}
export type NewMessageFormValuesType = {
    newMessageBody: string
}


const Dialogs = (props: PropsType) => {
    const state = props.dialogsPage


    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>)
    let addNewMessage = (values: NewMessageFormValuesType) => {
        props.sendMessage(values.newMessageBody)
    }

  /*  let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
    }
    if (!props.isAuth) return <Navigate to="/login"/>*/

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
            </div>
           {/*does not exist yet*/}
            <AddMessageForm onSubmit={addNewMessage}/>
        </div>
    )
}

export default Dialogs