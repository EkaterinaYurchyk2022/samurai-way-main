import {applyMiddleware, combineReducers, createStore} from 'redux';
import profileReducer, {ActionsProfileTypes} from './profile-reducer';
import dialogsReducer, {ActionsDialogsTypes} from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer, {ActionsUsersTypes} from './users-reducer';
import authReducer, {ActionsAuthTypes} from './auth-reducer';
import thunkMiddleWare from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'
import appReducer, {ActionsAppTypes} from './app-reducer';

export type ActionsTypes =
    ActionsProfileTypes
    | ActionsDialogsTypes
    | ActionsUsersTypes
    | ActionsAuthTypes
    | ActionsAppTypes

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

export type RootStateType = ReturnType<typeof rootReducer>
let store = createStore(rootReducer, applyMiddleware(thunkMiddleWare));

export type StoreType = typeof store
// @ts-ignore
window.store = store;

export default store;