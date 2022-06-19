import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

export type HeaderPropsType = {
    isAuth: boolean,
    login: string | null,
    logout: () => void,
}

const Header: React.FC<HeaderPropsType> = (props) => {
    return (
        <header className={s.header}>
            <img
                src={'https://cdn.shopify.com/shopifycloud/hatchful_web_two/bundles/4a14e7b2de7f6eaf5a6c98cb8c00b8de.png'}
                alt={'Img'}/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
};

export default Header;