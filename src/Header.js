import React from 'react';
import Logo from './Logo/Logo.js';
import Menu from './Menu.js';
import Checkout from "./Checkout/Checkout";

function Header(props) {
    return (
        <div className="header">
            <Logo />
            <Menu />
            <Checkout products={props.products}/>
            <a href={'#/'} className="logout">выход</a>
        </div>
    );
}

export default Header;