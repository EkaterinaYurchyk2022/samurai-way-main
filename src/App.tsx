import React from 'react';
import s from'./App.module.css';
import Navbar from './components/Navbar/Navbar';
import {Route, withRouter} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import {connect} from 'react-redux';
import {RootStateType} from './redux/redux-store';
import {compose} from 'redux';
import {initializeApp} from './redux/app-reducer';
import Preloader from "./components/common/Preloader/Preloader";


type MapStatePropsType = {
    initialized: boolean,
}

type MapDispatchToPropsType = {
    initializeApp: () => void
}

export type AppPropsType = MapStatePropsType & MapDispatchToPropsType

class App extends React.Component<AppPropsType> {

    componentDidMount() {

        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className={s.appWrapper}>
                <HeaderContainer/>
                <Navbar/>
                <div className={s.appWrapperContent}>
                    <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                    <Route path="/profile/:userId?"
                           render={() => <ProfileContainer/>}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="settings" render={() => <Settings/>}/>
                    <Route path="/login" render={() => <LoginPage/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => ({
    initialized: state.app.initialized
})

export default compose<React.ComponentType>(withRouter, connect<MapStatePropsType, MapDispatchToPropsType, {}, RootStateType>(mapStateToProps, {initializeApp}))(App);
