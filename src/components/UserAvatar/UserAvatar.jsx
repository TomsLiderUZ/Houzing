import React, { useState, useEffect, useRef } from "react";
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
  const [canvasDataUrl, setCanvasDataUrl] = useState(""); // Canvasdan olingan ma'lumot

  const canvasRef = useRef(null); // Canvas uchun ref

  useEffect(() => {
    const retrieveUserAccount = () => {
      try {
        const userAccountLog = accounts.find(
          (account) => account.userName === name
        );
        if (userAccountLog) {
          handleUserAccount(userAccountLog);
        } else {
          setDefaultAvatar();
        }
      } catch (error) {
        console.error("Error retrieving user data:", error);
      }
    };

    const setDefaultAvatar = () => {
      setImgSrc(`https://robohash.org/${name}.png?size=${width}x${height}`);
      setImgActive(true);
      setUserLogin(name);
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

  // Rasm chizish va fon rangini o'rnatish
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, width, height); // Canvasni tozalash

    // Fon rangini o'rnatish
    ctx.fillStyle = backgroundColor; // Background rangini o'rnatish
    ctx.fillRect(0, 0, width, height); // Fonni to'ldirish

    // Agar rasm mavjud bo'lsa, uni chizish
    if (imgActive) {
      const img = new Image();
      img.src = bannedActive ? "/assets/img/banned.jpg" : imgSrc;

      // Rasm yuklanganda
      img.onload = () => {
        ctx.drawImage(img, 0, 0, width, height);
        updateCanvasDataUrl(canvas); // Canvasdan ma'lumotni oling
      };
      
      // Rasm yuklanmasa
      img.onerror = () => {
        console.error("Image failed to load:", img.src);
        // Agar rasm yuklanmasa, faqat matnni chizish
        drawTextOnCanvas(ctx, userLogin, width, height);
      };
    } else {
      // Agar rasm bo'lmasa, matnni chizish
      drawTextOnCanvas(ctx, userLogin, width, height);
    }
  }, [imgActive, bannedActive, imgSrc, userLogin, width, height, backgroundColor]);

  const drawTextOnCanvas = (ctx, text, width, height) => {
    ctx.fillStyle = "white"; // Matn rangini o'rnatish
    ctx.font = `${Math.floor(height / 5)}px Arial`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, width / 2, height / 2); // Matnni chizish
    updateCanvasDataUrl(ctx.canvas); // Canvasdan ma'lumotni oling
  };

  // Canvasdan olingan ma'lumotni yangilash
  const updateCanvasDataUrl = (canvas) => {
    try {
      setCanvasDataUrl(canvas.toDataURL("image/png")); // Base64 formatida ma'lumot
    } catch (error) {
      console.error("Error exporting canvas data URL:", error);
    }
  };

  return (
    <UserAvatarBg
      style={{
        width: `${width}px`,
        height: `${height}px`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <canvas ref={canvasRef} width={width} height={height} />
      <UserAvatarImg
        src={canvasDataUrl} // Canvasdan olingan ma'lumotni ulash
        alt={userLoginName}
        width={width}
        height={height}
        style={{ display: canvasDataUrl ? "block" : "none" }} // Rasm bo'lsa ko'rsatish
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
  return `#${color.padStart(6, "0")}`; // Rang kodini to'ldirish
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
