import React, { useState, useEffect } from "react";
import { accounts } from "../Accounts/Accounts.jsx";
import { conditionsAll } from "../Accounts/UnicalAccaunts.jsx";
import { UserAvatarBg } from "./style";

const PREFIXES = ["Mr", "Ms", "Mrs", "Dr", "Prof", "Job", "Any", "  "];

function UserAvatar({ width, height, font, name }) {
  const [userLogin, setUserLogin] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");
  const [imgSrc, setImgSrc] = useState("");
  const [imgActive, setImgActive] = useState(false);
  const [bannedActive, setBannedActive] = useState(false);
  const [accountActiveInfo, setAccountActiveInfo] = useState(false);

  useEffect(() => {
    const retrieveUserAccount = () => {
      try {
        // Attempt to find the user account in the imported accounts
        const userAccountLog = accounts.find(
          (account) => account.userName === name
        );

        if (userAccountLog) {
          handleUserAccount(userAccountLog);
          setAccountActiveInfo(true);
        } else {
          // If no account is found, set default avatar and info
          setImgSrc(`https://robohash.org/${name}.png?size=${width}x${height}`);
          setImgActive(true);
          setUserLogin(name); // Optionally show the name
          setAccountActiveInfo(false);
        }
      } catch (error) {
        console.error("Error retrieving user data:", error);
        setAccountActiveInfo(false);
      }
    };

    retrieveUserAccount();
  }, [name, width, height]); // Added width and height to dependency array

  const handleUserAccount = (userAccountLog) => {
    const { login, img, banned } = userAccountLog;

    setBannedActive(!!banned);
    const abbreviation = getAbbreviation(login);
    const { userLogin, backgroundColor } = determineUserLoginAndColor(
      login,
      abbreviation
    );

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

    for (const condition of conditionsAll) {
      if (loginLowerCase.search(condition.regex) !== -1) {
        return {
          userLogin: condition.userLogin,
          backgroundColor: condition.backgroundColor,
        };
      }
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
        backgroundImage: `url("${
          bannedActive ? "/assets/img/banned.jpg" : imgSrc
        }")`,
        width: `${width}px`,
        height: `${height}px`,
        fontSize: `${font}`,
      }}
    >
      {imgActive || bannedActive ? "" : userLogin}
    </UserAvatarBg>
  );
}

// Function to get color from a string
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

// Function to get abbreviation from login
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
