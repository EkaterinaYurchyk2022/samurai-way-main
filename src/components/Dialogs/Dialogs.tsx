import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialodItem/DialogItem";
import Message from "./Message/Message";

import {InitialStateType} from "../../redux/dialogs-reducer";
import {Field, reduxForm} from "redux-form";
import {AddMessageForm} from "./AddMessageForm/AddMessageForm";



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
    if (!props.isAuth) return <Navigate to="/login"/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)
export default Dialogs