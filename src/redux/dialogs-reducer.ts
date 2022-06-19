import {ActionsTypes} from './redux-store';
import {DialogsType} from '../components/Dialogs/DialogItem/DialogItem';
import {MessageType} from '../components/Dialogs/Message/Message';
import {v1} from "uuid";

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ] as Array<DialogsType>,
    messages: [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'How is your it-kamasutra?'},
        {id: v1(), message: 'Yo'},
        {id: v1(), message: 'Yo'},
        {id: v1(), message: 'Yo'}
    ] as Array<MessageType>
}

export type InitialStateType = typeof initialState

const dialogsReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case 'SEND-MESSAGE':
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: v1(), message: body}]
            };
        default:
            return state;
    }
}

export type ActionsDialogsTypes = ReturnType<typeof sendMessageAC>

export const sendMessageAC = (newMessageBody: string) => {
    return {
        type: 'SEND-MESSAGE',
        newMessageBody
    } as const
}

export default dialogsReducer;