import React from 'react';
import s from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Ekaterina
                </div>
                <div className={s.dialog}>
                    Andrey
                </div>
                <div className={s.dialog}>
                    Anna
                </div>
                <div className={s.dialog}>
                    Ivan
                </div>
                <div className={s.dialog}>
                    Sasha
                </div>
                <div className={s.dialog}>
                    Mariya
                </div>
                <div className={s.dialog}>
                    Nastya
                </div>
            </div>
            <div className={s.messages}>
<div className={s.message}>Hi</div>
<div className={s.message}>How is your it-kamasutra?</div>
<div className={s.message}>Yo</div>


            </div>
        </div>
    );
};

export default Dialogs;