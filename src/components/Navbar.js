// import React from 'react';
// import { Link, NavLink } from "react-router-dom" 
// import "./Navbar.css"

// function Navbar ()  {
//     return (
//         <header className="header">
//             <a href="/home" className="logo"><Link to="/home">
//                 <h1>Learn <span>WebDev</span></h1></Link>
//             </a>
//             <div className='menu'>
//                 <span></span>
//                 <span></span>
//                 <span></span>
//             </div>
//             <nav className="navbar">
//                 <a href="/home"><NavLink to="/home">Home</NavLink></a>
//                 <a href="/about"><NavLink to="/about">About</NavLink></a>
//                 <a href="/contact"><NavLink to="/contact">Contact</NavLink></a>
//             </nav>
//         </header>
//     )
// }
// export default Navbar;

import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <a href="/home" className="logo">
                <Link to="/">
                    <h1>Learn <span>WebDev</span></h1>
                </Link>
            </a>
            <div className='menu' onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
                <a href="/home">
                    <NavLink to="/home" onClick={() => setMenuOpen(false)}>Home</NavLink>
                </a>
                <a href="/about">
                    <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
                </a>
                <a href="/contact">
                    <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
                </a>
            </nav>
        </header>
    );
}

export default Navbar;
