import {ActionsType, DialogsPageType, StateType} from "./store";


export const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
export const SEND_MESSAGE = 'SEND_MESSAGE'


let initialState={
    dialogs: [
        {id: 1, name: "Ekaterina"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Anna"},
        {id: 4, name: "Ivan"},
        {id: 5, name: "Sasha"},
        {id: 6, name: "Mariya"},
        {id: 7, name: "Anastasiya"}
    ],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your it-kamasutra?"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"}
    ],
    newMessageBody:" "
}

const dialogsReducer = (state= initialState, action: ActionsType) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body})
            return state

        default:
            return state
    }
}


/*export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body: string) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})*/






export default dialogsReducer