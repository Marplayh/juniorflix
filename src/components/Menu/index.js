import React from "react";
import { Link } from 'react-router-dom';
import Logo from '../../assets/juniorflix.png';
import Button from "../Button";
import './Menu.css';

function Menu() {
    return(
       <nav className="Menu">
        <Link to="/">
         <img className='Logo' src={Logo} alt="Alluraflix logo"/>
        </Link>
        <Button as={Link} className="ButtonLink" to="/cadastro/video">
           Novo vídeo
        </Button>
       </nav>
    ); 
}

export default Menu;