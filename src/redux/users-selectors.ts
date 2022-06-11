import {RootStateType} from './redux-store';
import {UserType} from './users-reducer';
import {createSelector} from 'reselect';

const getUsersSelector = (state: RootStateType): Array<UserType> => {
    return state.usersPage.users
}

export const getUsers = createSelector(getUsersSelector, (users) => {

    return users.filter(u => true)
})

export const getPageSize = (state: RootStateType) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state: RootStateType) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state: RootStateType) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state: RootStateType) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state: RootStateType) => {
    return state.usersPage.followingInProgress
}