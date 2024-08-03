import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import './style.css';
import SiteLogo from "../SiteLogo/SiteLogo.jsx";
import ScrollUp from '../ScrollUp/Index.jsx';
import AccauntActive from "../Accounts/AccauntActive.jsx";
import { storeEncryptedData, retrieveDecryptedData } from '../../hooks/cryptoUtils';
import { accounts } from "../Accounts/Accounts.jsx";
import { conditionsAll } from "../Accounts/UnicalAccaunts.jsx";

const storageKey = 'Pofs_ID-0.1';

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();

    const [homeColor, setHomeColor] = useState('white');
    const [propertiesColor, setPropertiesColor] = useState('white');
    const [navActive, setNavActive] = useState(false);
    const [showButton, setShowButton] = useState(true);
    const [showButton2, setShowButton2] = useState(false);
    const [retrievedData, setRetrievedData] = useState(false);
    const [userLogin, setUserLogin] = useState("");
    const [backgroundColor, setBackgroundColor] = useState("");
    const [imgSrc, setImgSrc] = useState("");
    const [imgActive, setImgActive] = useState(false);
    const [bannedActive, setBannedActive] = useState(false);
    const [accauntActiveInfo, setAccauntActiveInfo] = useState("");

    useEffect(() => {
        storeEncryptedData(storageKey, accounts);
        const decryptedAccounts = retrieveDecryptedData(storageKey);
        const storedEncodedValue = localStorage.getItem("you!Prof_Active_ID-1.1");
        const userName = storedEncodedValue ? atob(storedEncodedValue) : '';

        const userAccountLog = decryptedAccounts.find(account => account.userName === userName);

        if (userAccountLog) {
            handleUserAccount(userAccountLog);
            setAccauntActiveInfo(true)
        }else{
            setAccauntActiveInfo(false)
        }
    }, [location.pathname]);

    const handleUserAccount = (userAccountLog) => {
        const { login, img, banned } = userAccountLog;

        setBannedActive(!!banned);

        const abbreviation = getAbbreviation(login);
        const { userLogin, backgroundColor } = determineUserLoginAndColor(login, abbreviation);

        setUserLogin(userLogin);
        setBackgroundColor(backgroundColor);

        if (img && img !== "none" && img !== "") {
            setImgSrc(img);
            setImgActive(true);
        } else {
            setImgSrc("");
            setImgActive(false);
        }
    };

    const determineUserLoginAndColor = (login, abbreviation) => {
        const loginLowerCase = login.toLowerCase();
        const conditions = conditionsAll;

        for (const condition of conditions) {
            if (loginLowerCase.search(condition.regex) !== -1) {
                return { userLogin: condition.userLogin, backgroundColor: condition.backgroundColor };
            }
        }

        return { userLogin: abbreviation, backgroundColor: formatLoginForBackground(login) };
    };

    const changeNavMenu = () => {
        setNavActive(prev => !prev);
    };

    const scrollToBottom = () => {
        window.scrollTo({ top: document.querySelector(".Container").scrollHeight, behavior: 'smooth' });
        setNavActive(false);
    };

    useEffect(() => {
        setNavActive(false);

        const pathSegments = location.pathname.split('/');
        const userName = pathSegments[pathSegments.length - 1];
        const userAccount = accounts.find(account => account.userName === userName);
        const login = userAccount?.login || '';

        let title = '404 Not Found';
        let homeColor = 'white';
        let propertiesColor = 'white';

        if (location.pathname === '/home') {
            title = 'Home - Houzing';
            homeColor = 'aqua';
            propertiesColor = 'white';
        } else if (location.pathname === '/properties') {
            title = 'Properties - Houzing';
            homeColor = 'white';
            propertiesColor = 'aqua';
        } else if (location.pathname === '/user/login') {
            title = 'LogIn - Houzing';
        } else if (location.pathname === '/user/register') {
            title = 'Register - Houzing';
        } else if (location.pathname === '/user/me') {
            title = 'Your profile - Houzing';
        } else if (location.pathname === '/user/me/edit') {
            title = 'Edit profile - Houzing';
        } else if (location.pathname.startsWith('/@')) {
            if (userAccount) {
                title = `${login} - Houzing`;
            }
        }

        document.title = title;
        setHomeColor(homeColor);
        setPropertiesColor(propertiesColor);

        window.scrollTo({ top: 0, behavior: 'auto' });
    }, [location, accounts]);

    useEffect(() => {
        const handleResize = () => {
            const isMobile = document.body.offsetWidth <= 750;
            if (location.pathname === "/user/login" || location.pathname === "/user/register") {
                setShowButton(false);
                setShowButton2(false);
            } else {
                if (isMobile) {
                    setShowButton(false);
                    setShowButton2(true);
                } else {
                    setShowButton(true);
                    setShowButton2(false);
                }
            }
            if (document.body.offsetWidth >= 750) {
                setNavActive(false);
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [location.pathname]);

    useEffect(() => {
        const storedEncodedValue = localStorage.getItem("you!Prof_Active_ID-1.0");
        if (storedEncodedValue) {
            const decodedValue = atob(storedEncodedValue);
            const decodedUp = decodedValue === 'true';
            setRetrievedData(decodedUp);
        } else {
            setRetrievedData(false);
        }
    }, []);

    return (
        <div className="Container">
            <AccauntActive active={accauntActiveInfo} />
            <div className="NavItemsBgLinksBgMobileWrapper" style={{ opacity: navActive ? '1' : '0', marginTop: navActive ? '0px' : '-1000px' }}>
                <div className="NavItemsBgLinksBgMobileTop">
                    <button className="NavItemsBgLinksBgMobileCloseBtn" onClick={changeNavMenu}>
                        <img src="../../../src/assets/img/navCloseBtn.png" alt="Close menu" />
                    </button>
                </div>
                <div className="NavItemsBgLinksBgMobileBottomWrapper">
                    <div className="NavItemsBgLinksBgMobileBottom">
                        <div className="NavItemsBgLinksBgMobileLinksWrapper">
                            <Link className='NavItemsBgLinksBgMobileLinkBg' to="/home">Home</Link>
                            <Link className='NavItemsBgLinksBgMobileLinkBg' to="/properties">Properties</Link>
                            <button className='NavItemsBgLinksBgMobileLinkBg' onClick={scrollToBottom}>Contacts</button>
                        </div>
                        <div className="NavItemsBgLinksBgMobileLinkMoresWrapper">
                            <a href="/" className="NavItemsBgLinksBgMobileLinkMoreItemBg">
                                <img src="../../../src/assets/icons/facebookDark.svg" alt="Facebook" />
                            </a>
                            <a href="/" className="NavItemsBgLinksBgMobileLinkMoreItemBg">
                                <img src="../../../src/assets/icons/twitterDark.svg" alt="Twitter" />
                            </a>
                            <a href="/" className="NavItemsBgLinksBgMobileLinkMoreItemBg">
                                <img src="../../../src/assets/icons/instagramDark.svg" alt="Instagram" />
                            </a>
                            <a href="/" className="NavItemsBgLinksBgMobileLinkMoreItemBg">
                                <img src="../../../src/assets/icons/linkedinDark.svg" alt="LinkedIn" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="NavWrapper">
                <button className="NavItemsBgNavMenuBtn" onClick={changeNavMenu}>
                    <img src="../../../src/assets/img/navMenu.png" alt="Open menu" />
                </button>
                <div className="NavItemsBg NavItemsBgLogo">
                    <Link to="/">
                        <SiteLogo />
                    </Link>
                </div>
                <div className="NavItemsBg NavItemsBgLink">
                    <Link to="/home" className="NavItemLinks" style={{ color: homeColor }}>Home</Link>
                    <Link to="/properties" className="NavItemLinks" style={{ color: propertiesColor }}>Properties</Link>
                    <button className="NavItemLinks" onClick={scrollToBottom}>Contacts</button>
                </div>
                {accauntActiveInfo ? (
                    <div className="NavItemsBgProfile">
                        <Link to={"/user/me"} className="NavItemsBgProfileOpenBtn" style={{
                            backgroundColor: imgActive || bannedActive ? "black" : backgroundColor,
                            backgroundImage: `url("${bannedActive ? "../../src/assets/img/banned.jpg" : imgSrc}")`
                        }}>
                            {imgActive || bannedActive ? "" : userLogin}
                        </Link>
                    </div>
                ) : (
                    <>
                        <div className="NavItemsBg NavItemsBgJoin">
                            <Link to="/user/login" className="NavItemsJoinBtnBg" style={{ display: showButton ? "flex" : "none" }}>Login</Link>
                        </div>
                        <div className="NavItemsBgJoinMobile" style={{ display: showButton2 ? "flex" : "none" }}>
                            <Link to="/user/login" className="NavItemsBgJoinIcon">
                                <img src="../../../src/assets/img/loginOpen.png" alt="Login icon" className='NavItemsBgJoinIcon' />
                            </Link>
                        </div>
                    </>
                )}
            </div>
            <Outlet />
            <ScrollUp />
        </div>
    );
}

const getColorFromString = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }

    const color = ((hash >> 24) & 0xFF).toString(16).padStart(2, '0') +
        ((hash >> 16) & 0xFF).toString(16).padStart(2, '0') +
        ((hash >> 8) & 0xFF).toString(16).padStart(2, '0') +
        ((hash) & 0xFF).toString(16).padStart(2, '0');
    return color.slice(0, 6);
};

const formatLoginForBackground = (login) => {
    let color = getColorFromString(login);
    return `#${color.padStart(6, '0')}`;
};

const getAbbreviation = (login) => {
    const prefixes = ['Mr', 'Ms', 'Mrs', 'Dr', 'Prof', "Job", "Any", "  "];
    for (const prefix of prefixes) {
        if (login.startsWith(prefix)) {
            const restOfLogin = login.slice(prefix.length).trim();
            return `${prefix[0]}${restOfLogin[0] || ''}`.toUpperCase();
        }
    }

    const loginParts = login.split(/[\s_]+/);
    return loginParts.length > 1
        ? loginParts.map(part => part[0].toUpperCase()).join('')
        : login.slice(0, 2).toUpperCase();
};

export default Navbar;
