import React from 'react';
import '.\\Header.css';
import Logo from '.\\logoxace.png';


function Header(){
    return(
        <header>
            <div className="Header">
                <img src ={ Logo } alt="Logo Xace"/>
            </div>
        </header>
    );
}

export default Header;
