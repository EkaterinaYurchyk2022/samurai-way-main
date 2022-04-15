import profileReducer, {ADD_POST, UPDATE_NEW_POST_TEXT} from "./profile-reducer";
import dialogsReducer, {SEND_MESSAGE, UPDATE_NEW_MESSAGE_BODY} from "./dialogs-reducer";




type MessageType = {
    id: number
    message: string
    type?: string
}

type DialogsType = {
    id: number
    name: string
}

export type PostType = {
    id: number
    message: string
    likesCounts: number
}

export type FriendType = {
    id: number
    name: string
}

export type FriendsType = {
    friends: Array<FriendType>
}


export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    newMessageBody: string

}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType

}




export type ActionsType = ReturnType<typeof addPostActionCreator> | ReturnType<typeof sendMessageCreator> | ReturnType<typeof updateNewMessageBodyCreator> | ReturnType<typeof updateNewPostTextActionCreator>

export type StoreType = {
    _state: StateType
    subscribe: (observer: ()=>void)=>void
    getState: ()=>StateType
    _callSubscriber: ()=>void
    dispatch: (action: ActionsType)=>void
    addPost: ()=>void
    updateNewPostText: (newText: string)=>void

}

const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCounts: 15},
                {id: 2, message: "It's my first post", likesCounts: 25}
            ],
            newPostText: "it-kamasutra.com"

        },
        dialogsPage: {
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
        },
       /* sidebar: 'hello'*/
    },
    _callSubscriber() {
        console.log("State changed")
    },
    getState() {
        return this._state
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },


    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCounts: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber()
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText,
            this._callSubscriber()
    },
    dispatch(action) {     // {type: 'ADD_POST'} //action - это объект, у которого обязательно есть тип

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        /*this._state.sidebar = sidebarReducer(this._state.sidebar, action)*/

        this._callSubscriber()


        }
    }


export const addPostActionCreator = () => ({type: 'ADD_POST'} as const)
export const sendMessageCreator = () => ({type: 'SEND_MESSAGE'} as const)
export const updateNewMessageBodyCreator = (body: string) => ({type: 'UPDATE_NEW_MESSAGE_BODY', body: body} as const)


export const updateNewPostTextActionCreator = (newText: string) => ({
    type: 'UPDATE_NEW_POST_TEXT', newText: newText} as const)




export default store