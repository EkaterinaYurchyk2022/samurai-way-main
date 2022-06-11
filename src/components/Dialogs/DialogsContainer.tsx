import {sendMessageAC} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {RootStateType} from '../../redux/redux-store';
import {compose, Dispatch} from 'redux';
import {DialogsType} from './DialogItem/DialogItem';
import {MessageType} from './Message/Message';
import React from 'react';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

type mapStateToPropsType = {
    dialogs: Array<DialogsType>,
    messages: Array<MessageType>,
    // newMessageBody: string,
    isAuth: boolean,
}

type mapDispatchToPropsType = {
    sendMessage: (newMessageBody: string) => void,
}

let mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        // newMessageBody: state.dialogsPage.newMessageBody,
        isAuth: state.auth.isAuth,
    }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageAC(newMessageBody))
        }
    }
}

export default compose<React.ComponentType>(
    withAuthRedirect,
    connect<mapStateToPropsType, mapDispatchToPropsType, {}, RootStateType>(mapStateToProps, mapDispatchToProps),
)(Dialogs);