import React, { Component } from 'react';
import '.\\Header.css';
import Logo from '.\\logoxace.png';


function Header(){
    return(
        <div>
            <img src ={ Logo } className="Header"></img>
        </div>
    );

}

export default Header;