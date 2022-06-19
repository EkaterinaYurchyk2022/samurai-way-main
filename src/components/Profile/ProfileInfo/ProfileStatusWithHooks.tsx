import React, {ChangeEvent, FC, useEffect, useState} from 'react';

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatusWithHooks: FC<ProfileStatusPropsType> = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
                < div>
                    <span onDoubleClick={activateEditMode}> {props.status || '-----'}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus onBlur={deactivateEditMode} value={status}/>
                </div>
            }
        </div>
    );
}

export default ProfileStatusWithHooks;