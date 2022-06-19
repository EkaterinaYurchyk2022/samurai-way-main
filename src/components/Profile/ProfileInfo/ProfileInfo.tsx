import React from 'react';
import s from './ProfileInfo.module.css'

import {ProfileType} from '../ProfileContainer';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import Preloader from "../../common/Preloader/Preloader";

type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            {/*<div className={s.profileImg}>*/}
            {/*    <img*/}
            {/*        src={'https://hylinecruises.com/wp-content/uploads/2019/09/Winner_Outdoor-e1628881489780-1080x400.jpg'}*/}
            {/*        alt={'Profile Img'}/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt={'large avatar'}/>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>

                <div><b>Full name:</b> <span>{props.profile.fullName}</span></div>
                <div><b>About Me:</b> <span>{props.profile.aboutMe}</span></div>
                <div><b>Looking For A Job:</b> <span>{props.profile.lookingForAJob}</span></div>
                <div>{props.profile.lookingForAJobDescription}</div>
                <br/>
                <div><b>Contacts</b></div>
                <div><b>Facebook:</b> <span>{props.profile.contacts.facebook}</span></div>
                <div><b>Website:</b> <span>{props.profile.contacts.website}</span></div>
                <div><b>VK:</b> <span>{props.profile.contacts.vk}</span></div>
                <div><b>Twitter:</b> <span>{props.profile.contacts.twitter}</span></div>
                <div><b>Instagram:</b> <span>{props.profile.contacts.instagram}</span></div>
                <div><b>Youtube:</b> <span>{props.profile.contacts.youtube}</span></div>
                <div><b>GitHub:</b> <span>{props.profile.contacts.github}</span></div>
                <div><b>MainLink:</b> <span>{props.profile.contacts.mainLink}</span></div>


            </div>
        </div>
    );
};

export default ProfileInfo;