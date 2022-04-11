import React from 'react';
import './Header.module.css';

export type HeaderPropsType={

}

const Header:React.FC<HeaderPropsType> = (props) => {
    return (
        <header className='header'>
            <img
                src='https://cdn.shopify.com/shopifycloud/hatchful_web_two/bundles/4a14e7b2de7f6eaf5a6c98cb8c00b8de.png'/>
        </header>
    );
};

export default Header;