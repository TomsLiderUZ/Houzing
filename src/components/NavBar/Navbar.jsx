import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import './style.css';
import ScrollUp from '../ScrollUp/Index.jsx';
import Footer from "../Footer/Footer.jsx";

function Navbar() {
    const location = useLocation();
    const [homeColor, setHomeColor] = useState('white');
    const [propertiesColor, setPropertiesColor] = useState('white');

    useEffect(() => {
        setHomeColor(location.pathname === '/home' ? 'aqua' : 'white');
        setPropertiesColor(location.pathname === '/properties' ? 'aqua' : 'white');
        setNavActive(false)
        if (location.pathname === '/home') {
            document.title = `Houzing - Home`;
        } else if (location.pathname === '/properties') {
            document.title = `Houzing - Properties`;
        } else if (location.pathname === '/login') {
            document.title = `Houzing - LogIn`;
        } else {
            document.title = `404 Not Found`;
        }

        window.scrollTo({ top: 0, behavior: 'auto' });
    }, [location]);

    const scrollToBottom = () => {
        window.scrollTo({ top: document.querySelector(".Container").scrollHeight, behavior: 'smooth' });
        setNavActive(false)
    };


    const [navActive, setNavActive] = useState(false);

    const changeNavMenu = () => {
        if (navActive === true) {
            setNavActive(false)
        } else if (navActive === false) {
            setNavActive(true)
        } else {
            setNavActive(false)
        }
    }


    return (
        <div className="Container">

            <div className="NavItemsBgLinksBgMobileWrapper" style={{ opacity: navActive === true ? '1' : '0', marginTop: navActive === true ? '0px' : '-1000px' }}>
                <div className="NavItemsBgLinksBgMobileTop">
                    <button className="NavItemsBgLinksBgMobileCloseBtn" onClick={changeNavMenu}>
                        <img src="./src/assets/img/navCloseBtn.png" alt="close" />
                    </button>
                </div>
                <div className="NavItemsBgLinksBgMobileBottom">
                    <div className="NavItemsBgLinksBgMobileLinksWrapper">
                        <Link className='NavItemsBgLinksBgMobileLinkBg' to="/home">Home</Link>
                        <Link className='NavItemsBgLinksBgMobileLinkBg' to="/properties">Properties</Link>
                        <button className='NavItemsBgLinksBgMobileLinkBg' onClick={scrollToBottom}>Contacts</button>
                    </div>
                    <div className="NavItemsBgLinksBgMobileLinkMoresWrapper">
                        <a href="/" className="NavItemsBgLinksBgMobileLinkMoreItemBg">
                            <img src="./src/assets/icons/facebookDark.svg" alt="icon" />
                        </a>
                        <a href="/" className="NavItemsBgLinksBgMobileLinkMoreItemBg">
                            <img src="./src/assets/icons/twitterDark.svg" alt="icon" />
                        </a>
                        <a href="/" className="NavItemsBgLinksBgMobileLinkMoreItemBg">
                            <img src="./src/assets/icons/instagramDark.svg" alt="icon" />
                        </a>
                        <a href="/" className="NavItemsBgLinksBgMobileLinkMoreItemBg">
                            <img src="./src/assets/icons/linkedinDark.svg" alt="icon" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="NavWrapper">
                <button className="NavItemsBgNavMenuBtn">
                    <img src="./src/assets/img/navMenu.png" alt="menu" onClick={changeNavMenu} />
                </button>
                <div className="NavItemsBg NavItemsBgLogo">
                    <Link to="/">
                        <img src="./src/assets/icons/logo.png" alt="logo" />
                    </Link>
                </div>
                <div className="NavItemsBg NavItemsBgLink">
                    <Link to="/home" className="NavItemLinks" style={{ color: homeColor }}>Home</Link>
                    <Link to="/properties" className="NavItemLinks" style={{ color: propertiesColor }}>Properties</Link>
                    <button className="NavItemLinks" onClick={scrollToBottom}>Contacts</button>
                </div>
                <div className="NavItemsBg NavItemsBgJoin">
                    <Link to="/login" className="NavItemsJoinBtnBg">Login</Link>
                </div>
                <div className="NavItemsBgJoinMobile">
                    <Link to="/login" className="NavItemsBgJoinIcon">
                        <img src="./src/assets/img/loginOpen.png" alt="menu" className='NavItemsBgJoinIcon' />
                    </Link>
                </div>
            </div>
            <Outlet />
            <ScrollUp />
        </div>
    );
}

export default Navbar;









// import React, { useState, useEffect } from 'react';
// import { Outlet, Link, useLocation } from 'react-router-dom';
// import styled from 'styled-components';
// import ScrollUp from '../ScrollUp/Index.jsx';
// import {
//   Container,
//   NavWrapper,
//   NavItemsBgLogo,
//   NavItemsBgLink,
//   NavItemsBgJoin,
//   NavItemLinks,
//   NavItemsJoinBtnBg
// } from './style';

// const Navbar = () => {
//   const location = useLocation();
//   const [homeColor, setHomeColor] = useState('white');
//   const [propertiesColor, setPropertiesColor] = useState('white');

//   useEffect(() => {
//     setHomeColor(location.pathname === '/home' ? 'aqua' : 'white');
//     setPropertiesColor(location.pathname === '/properties' ? 'aqua' : 'white');

//     if (location.pathname === '/home') {
//       document.title = `Houzing - Home`;
//     } else if (location.pathname === '/properties') {
//       document.title = `Houzing - Properties`;
//     } else if (location.pathname === '/login') {
//       document.title = `Houzing - LogIn`;
//     } else {
//       document.title = `404 Not Found`;
//     }

//     window.scrollTo({ top: 0, behavior: 'auto' });
//   }, [location]);

//   const scrollToBottom = () => {
//     window.scrollTo({ top: document.querySelector(".Container").scrollHeight, behavior: 'smooth' });
//   };

//   return (
//     <Container>
//       <NavWrapper>
//         <NavItemsBgLogo>
//           <Link to="/">
//             <img src="./src/assets/icons/logo.png" alt="logo" />
//           </Link>
//         </NavItemsBgLogo>
//         <NavItemsBgLink>
//           <NavItemLinks to="/home" style={{ color: homeColor }}>Home</NavItemLinks>
//           <NavItemLinks to="/properties" style={{ color: propertiesColor }}>Properties</NavItemLinks>
//           <div className="NavItemLinks" onClick={scrollToBottom}>Contacts</div>
//         </NavItemsBgLink>
//         <NavItemsBgJoin>
//           <Link to="/login" className="NavItemsJoinBtnBg">Login</Link>
//         </NavItemsBgJoin>
//       </NavWrapper>
//       <Outlet />
//       <ScrollUp />
//     </Container>
//   );
// }

// export default Navbar;