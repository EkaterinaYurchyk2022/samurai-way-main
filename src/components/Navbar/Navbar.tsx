import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar: React.FC = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" className={({isActive})=> isActive ? s.activeLink : s.item}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/dialogs" className={({isActive})=> isActive ? s.activeLink : s.item}>Messages</NavLink>
            </div>

            <div className={s.item}>
                <NavLink to="/news" className={({isActive})=> isActive ? s.activeLink : s.item}>News</NavLink>
            </div>

            <div className={s.item}>
                <NavLink to="/music" className={({isActive})=> isActive ? s.activeLink : s.item}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" className={({isActive})=> isActive ? s.activeLink : s.item}>Settings</NavLink>
                <a>Profile</a>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <a>Messages</a>
            </div>
            <div className={s.item}>
                <a>News</a>
            </div>
            <div className={s.item}>
                <a>Music</a>
            </div>
            <div className={s.item}>
                <a>Settings</a>
            </div>
        </nav>
    );
};

export default Navbar;