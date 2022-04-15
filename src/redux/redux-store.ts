import {combineReducers, createStore, EmptyObject, Store} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import {ActionsType, DialogsPageType, ProfilePageType} from "./store";


/*
export type storeType={
    store: Store<EmptyObject & { readonly profilePage: ProfilePageType; readonly dialogsPage: DialogsPageType; }, ActionsType>
}
*/

/*export type reducersType = typeof store*/

let reducers=combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer
    //sidebar:sidebarReducer
})
export let store = createStore(reducers)