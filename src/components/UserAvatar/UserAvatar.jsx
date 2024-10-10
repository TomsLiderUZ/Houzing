import React, { useState, useEffect, useMemo } from "react";
import { accounts } from "../Accounts/Accounts.jsx";
import { conditionsAll } from "../Accounts/UnicalAccaunts.jsx";
import { UserAvatarBg, UserAvatarImg } from "./style";

const PREFIXES = ["Mr", "Ms", "Mrs", "Dr", "Prof", "Job", "Any", "  "];

function UserAvatar({ width, height, name }) {
  const [userLogin, setUserLogin] = useState("");
  const [userLoginName, setUserLoginName] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");
  const [imgSrc, setImgSrc] = useState("");
  const [imgActive, setImgActive] = useState(false);
  const [bannedActive, setBannedActive] = useState(false);
  const [accountActiveInfo, setAccountActiveInfo] = useState(false);

  useEffect(() => {
    const retrieveUserAccount = () => {
      try {
        const userAccountLog = accounts.find(
          (account) => account.userName === name
        );
        if (userAccountLog) {
          handleUserAccount(userAccountLog);
          setAccountActiveInfo(true);
        } else {
          setDefaultAvatar();
        }
      } catch (error) {
        console.error("Error retrieving user data:", error);
        setAccountActiveInfo(false);
      }
    };

    const setDefaultAvatar = () => {
      setImgSrc(`https://robohash.org/${name}.png?size=${width}x${height}`);
      setImgActive(true);
      setUserLogin(name);
      setAccountActiveInfo(false);
    };

    retrieveUserAccount();
  }, [name, width, height]);

  const handleUserAccount = (userAccountLog) => {
    const { login, img, banned } = userAccountLog;

    setBannedActive(!!banned);
    const abbreviation = getAbbreviation(login);
    const { userLogin, backgroundColor } = determineUserLoginAndColor(
      login,
      abbreviation
    );

    setUserLogin(userLogin);
    setUserLoginName(login);
    setBackgroundColor(backgroundColor);
    setImgSrc(img && img !== "none" ? img : "");
    setImgActive(!!img);
  };

  const determineUserLoginAndColor = (login, abbreviation) => {
    const loginLowerCase = login.toLowerCase();

    const matchedCondition = conditionsAll.find(
      (condition) => loginLowerCase.search(condition.regex) !== -1
    );

    if (matchedCondition) {
      return {
        userLogin: matchedCondition.userLogin,
        backgroundColor: matchedCondition.backgroundColor,
      };
    }

    return {
      userLogin: abbreviation,
      backgroundColor: formatLoginForBackground(login),
    };
  };

  return (
    <UserAvatarBg
      style={{
        backgroundColor: imgActive || bannedActive ? "black" : backgroundColor,
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      <UserAvatarImg
        src={`${bannedActive ? "/assets/img/banned.jpg" : imgSrc}`}
        alt={userLoginName}
        width={width}
        height={height}
      />
    </UserAvatarBg>
  );
}

const getColorFromString = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const color =
    ((hash >> 24) & 0xff).toString(16).padStart(2, "0") +
    ((hash >> 16) & 0xff).toString(16).padStart(2, "0") +
    ((hash >> 8) & 0xff).toString(16).padStart(2, "0") +
    (hash & 0xff).toString(16).padStart(2, "0");
  return color.slice(0, 6);
};

const formatLoginForBackground = (login) => {
  let color = getColorFromString(login);
  return `#${color.padStart(6, "0")}`;
};

const getAbbreviation = (login) => {
  for (const prefix of PREFIXES) {
    if (login.startsWith(prefix)) {
      const restOfLogin = login.slice(prefix.length).trim();
      return `${prefix[0]}${restOfLogin[0] || ""}`.toUpperCase();
    }
  }
  const loginParts = login.split(/[\s_]+/);
  return loginParts.length > 1
    ? loginParts.map((part) => part[0].toUpperCase()).join("")
    : login.slice(0, 2).toUpperCase();
};

export default UserAvatar;
