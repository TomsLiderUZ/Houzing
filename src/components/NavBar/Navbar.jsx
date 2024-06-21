import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import './style.css';
import ScrollUp from '../ScrollUp/Index.jsx'

function Navbar() {
    const location = useLocation();
    const [homeColor, setHomeColor] = useState('white');
    const [propertiesColor, setPropertiesColor] = useState('white');

    useEffect(() => {
        setHomeColor(location.pathname === '/home' ? 'aqua' : 'white');
        setPropertiesColor(location.pathname === '/properties' ? 'aqua' : 'white');

        if (location.pathname === '/home') {
            document.title = `Houzing - Home`;
        } else if (location.pathname === '/properties') {
            document.title = `Houzing - Properties`;
        } else if (location.pathname === '/login') {
            document.title = `Houzing - LogIn`;
        }else{
            document.title = `404 Not Found`; 
        }
    }, [location]);

    const scrollToBottom = () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    };

    return (
        <div className="Container">
            <div className="NavWrapper">
                <div className="NavItemsBg NavItemsBgLogo">
                    <Link to="/">
                        <img src="./src/assets/icons/logo.png" alt="logo" />
                    </Link>
                </div>
                <div className="NavItemsBg NavItemsBgLink">
                    <Link to="/home" className="NavItemLinks" style={{ color: homeColor }}>Home</Link>
                    <Link to="/properties" className="NavItemLinks" style={{ color: propertiesColor }}>Properties</Link>
                    <div className="NavItemLinks" onClick={scrollToBottom}>Contacts</div>
                </div>
                <div className="NavItemsBg NavItemsBgJoin">
                    <Link to="/login" className="NavItemsJoinBtnBg">Login</Link>
                </div>
            </div>
            <Outlet />
            <ScrollUp/>
        </div>
    );
}

export default Navbar;
