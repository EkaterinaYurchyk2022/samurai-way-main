import {ActionsTypes} from './redux-store';
import {ThunkDispatchType, ThunkType} from './users-reducer';
import {getAuthUserData} from './auth-reducer';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

let initialState: appType = {
    initialized: false,
}

export type appType = {
    initialized: boolean,
}

const appReducer = (state: appType = initialState, action: ActionsTypes): appType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export type ActionsAppTypes = ReturnType<typeof initializedSuccess>

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS}) as const

export const initializeApp = (): ThunkType => (dispatch: ThunkDispatchType) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess());
        });

}

export default appReducer;