import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../Footer/Footer.jsx";
import Alert from "../Alert/Index.jsx";
import { accounts } from "../Accounts/Accounts.jsx";
import { storeEncryptedData, retrieveDecryptedData } from '../../hooks/cryptoUtils';
import { conditionsAll } from "../Accounts/UnicalAccaunts.jsx";

import { 
  Container, 
  ContainerWrapperCard, 
  ContainerCardRow_1, 
  ContainerCardTopAvatarBg, 
  ContainerCardTopAvatarDisableItem,
  ContainerCardRow_2,
} from "./style.js";

const storageKey = 'Pofs_ID-0.1';

function UserMe() {
  const location = useLocation();
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertText, setAlertText] = useState("");
  const [userLogin, setUserLogin] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");
  const [imgSrc, setImgSrc] = useState("");
  const [imgActive, setImgActive] = useState(false);
  const [bannedActive, setBannedActive] = useState(false);

  useEffect(() => {
    storeEncryptedData(storageKey, accounts);
    const decryptedAccounts = retrieveDecryptedData(storageKey);

    const pathSegments = location.pathname.split('/');
    const userName = pathSegments[pathSegments.length - 1];

    const userAccount = decryptedAccounts.find(account => account.userName === userName);

    if (userAccount) {
      handleUserAccount(userAccount);
    }
  }, [location.pathname]);

  const handleUserAccount = (userAccount) => {
    const { login, img, banned } = userAccount;

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
    const conditions = conditionsAll

    for (const condition of conditions) {
      if (loginLowerCase.search(condition.regex) !== -1) {
        return { userLogin: condition.userLogin, backgroundColor: condition.backgroundColor };
      }
    }

    return { userLogin: abbreviation, backgroundColor: formatLoginForBackground(login) };
  };

  const hideAlert = () => {
    setAlertVisible(false);
  };

  return (
    <>

      <Container>
        <ContainerWrapperCard>
          <ContainerCardRow_1>
            <ContainerCardTopAvatarBg
              style={{
                backgroundColor: imgActive || bannedActive ? "black" : backgroundColor,
                backgroundImage: `url("${bannedActive ? "../../src/assets/img/banned.jpg" : imgSrc}")`
              }}
            >
              {imgActive || bannedActive ? "" : userLogin}
              <ContainerCardTopAvatarDisableItem />
            </ContainerCardTopAvatarBg>
          </ContainerCardRow_1>


          <ContainerCardRow_2>
            
          </ContainerCardRow_2>
        </ContainerWrapperCard>
      </Container>
      <Footer />
      <Alert showAlert={alertVisible} showText={alertText} onHide={hideAlert} />
    </>
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
  const prefixes = ['Mr', 'Ms', 'Mrs', 'Dr', 'Prof', "Job", "Any" ];
  for (const prefix of prefixes) {
    if (login.startsWith(prefix)) {
      const restOfLogin = login.slice(prefix.length);
      return `${prefix[0]}${restOfLogin[0] || ''}`.toUpperCase();
    }
  }

  const loginParts = login.split(/[\s_]+/);
  return loginParts.length > 1
    ? loginParts.map(part => part[0].toUpperCase()).join('')
    : login.slice(0, 2).toUpperCase();
};

export default UserMe;
