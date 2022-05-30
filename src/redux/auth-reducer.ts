import {authAPI} from "../api/api";

export const SET_USER_DATA = 'SET_USER_DATA'


export type UserType = {
    id: number,
    followed: boolean,
    fullName: string,
    status: string,
    location: locationType
    photoUrl: string

}

type locationType = {
    city: string,
    country: string
}
const initialState: InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false

}

export type InitialStateType = {
    userId: any
    email: any
    login: any
    isAuth: boolean

}

type authReducerACType = ReturnType<typeof authReducerAC>



type ActionType =
    authReducerACType


export const authReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.payload,
                isAuth: true
            }

        default:
            return state
    }

}

export const authReducerAC = (userId: number, email:string, login: string) => {
    return {
        type: SET_USER_DATA,
        payload: {
            userId,
            email,
            login
        }
    } as const
}

export const getUserData=()=>(dispatch)=>{
    authAPI.me()
        .then(response => {
            if(response.data.resultCode===0){
                let {id, email, login}=response.data.data
                dispatch(authReducerAC(id, email, login))
            }

        })

}

export default authReducer