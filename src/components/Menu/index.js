import React from "react";
import Logo from '../../assets/juniorflix.png';
import Button from "../Button";
import './Menu.css';

function Menu() {
    return(
       <nav className="Menu">
        <a href="/">
         <img className='Logo' src={Logo} alt="Alluraflix logo"/>
        </a>
        <Button as="a" className="ButtonLink" href="/">
           Novo vídeo
        </Button>
       </nav>
    ); 
}

export default Menu;