import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfilePageType} from "../../redux/profile-reducer";

export type ProfilePropsType = {
    profilePage: ProfilePageType | null
    status: string
    updateStatus: (status:string)=>void
   /* dispatch: (action: ActionsType) => void*/
/*    store: StoreType*/
   /* newPostText:()=>void*/

}

const Profile = (props: ProfilePropsType) => {


    return (
        <div>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;