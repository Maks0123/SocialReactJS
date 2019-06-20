import React from 'react';
import s from './Header.module.css'


const Header = () => {
    return (
    <header className={s.header}>
        <img src='https://generagames.com/wp-content/uploads/2016/11/cropped-logo-genera-web.png'/>
    </header>
    );
}

export default Header;