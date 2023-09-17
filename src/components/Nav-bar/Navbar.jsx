import React from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import { useRef } from "react";
import "../Nav-bar/Navbar.css"

const Navbar = () => {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }


        return (
      <header>
        <section></section>
            <nav ref={navRef}>
                <a href="/#">Inicio</a>
                <a href="/#">Info</a>
                <a href="/#">Galeria</a>
                <a href="/#">Contacto</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaBars/>
                </button>
      </header>

        )
        }

export default Navbar