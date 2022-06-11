import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {RootStateType} from '../../redux/redux-store';
import {logout} from '../../redux/auth-reducer';

type MapStatePropsType = {
    login: string | null,
    isAuth: boolean,
}

type MapDispatchToPropsType = {
    logout: () => void
}

export type HeaderContainerPropsType = MapStatePropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    render() {
        return (
            <Header login={this.props.login} isAuth={this.props.isAuth} logout={this.props.logout}/>
        );
    }
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect<MapStatePropsType, MapDispatchToPropsType, {}, RootStateType>(mapStateToProps, {logout})(HeaderContainer);