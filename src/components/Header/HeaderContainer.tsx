import React from 'react';
import Header from "./Header";

import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUserData} from "../../redux/auth-reducer";



class HeaderContainer extends React.Component<any, any>{
    componentDidMount() {
        this.props.toggleIsFetching(true)

        this.props.getUserData()
    }

    render() {
       return <Header {...this.props}/>
   }
};

const mapStateToProps=(state:AppStateType)=>({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect(mapStateToProps, {getUserData})(HeaderContainer);