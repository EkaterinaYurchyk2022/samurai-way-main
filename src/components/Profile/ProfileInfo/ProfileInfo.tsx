import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus'


const ProfileInfo = (props:any) => {
if (!props.profile) {
    return <Preloader/>
}
    return (
        <div>
            {/*<div style={{height: '50px', overflow: 'hidden'}}>
                <img
                    src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"/>
            </div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>

            </div>
        </div>

    );
};

export default ProfileInfo;