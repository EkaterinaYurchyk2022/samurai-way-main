import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getStatus, getUserProfile, ProfilePageType, updateStatus} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import WithAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profile: ProfilePageType | null

}

type MapDispatchToPropsType = {
    getUserProfile: (userId: number) => void
}
type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType
type ProfileContainerPropsType=RouteComponentProps<PathParamsType> & OwnPropsType


class ProfileContainer extends React.Component<any, any> {
    componentDidMount() {
        let userId = Number(this.props.match.params.userId)
        if (!userId && this.props.profile) {
            userId = this.props.profile.userId
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (

            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    status:state.profilePage.status

})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)