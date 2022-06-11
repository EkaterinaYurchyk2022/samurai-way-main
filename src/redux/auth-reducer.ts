import {ActionsTypes} from './redux-store';
import {authAPI} from '../api/api';
import {ThunkDispatchType, ThunkType} from './users-reducer';
import {FormAction, stopSubmit} from 'redux-form';

const SET_USER_DATA = 'SET_USER_DATA'

let initialState: authStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
}

export type authStateType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
}

const authReducer = (state: authStateType = initialState, action: ActionsTypes): authStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export type ActionsAuthTypes = ReturnType<typeof setAuthUserData>

export const setAuthUserData = (userId: number | null, email: string | null, login: | null, isAuth: boolean) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
}) as const

export const getAuthUserData = (): ThunkType => (dispatch: ThunkDispatchType) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        });
}

export const login = (email: string, password: string, rememberMe: boolean): ThunkType<FormAction> => dispatch => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
                dispatch(stopSubmit('login', {_error: message}));
            }
        });
}

export const logout = (): ThunkType => (dispatch: ThunkDispatchType) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        });
}

export default authReducer;