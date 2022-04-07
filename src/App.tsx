import React from 'react';
import './App.module.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {addPost, StateType, updateNewPostText} from "./redux/state";

export type AppPropsType={
    state: StateType
    addPost: ()=>void
    updateNewPostText: (newText:string)=>void
}


const App = (props: AppPropsType) => {


    return (

            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>

                    <Routes>
                        <Route path='/dialogs'
                               element={() => <Dialogs state={props.state.dialogsPage}/>}/>
                        <Route path='/profile'
                               element={() => <Profile profilePage={props.state.profilePage} addPost={props.addPost}
                                                       updateNewPostText={props.updateNewPostText}
                                                       />}/>
                        <Route path='/news' element={() => <News/>}/>
                        <Route path='/music' element={() => <Music/>}/>
                        <Route path='/settings' element={() => <Settings/>}/>
                    </Routes>
                </div>
            </div>

    );
}
export default App;
