import React, { useState, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer.jsx";
import Alert from "../Alert/Index.jsx";
import { accounts } from "../Accounts/Accounts.jsx";
import {
  storeEncryptedData,
  retrieveDecryptedData,
} from "../../hooks/cryptoUtils.js";
import { conditionsAll } from "../Accounts/UnicalAccaunts.jsx";
import { ConfirmedAccounts } from "../Accounts/ConfirmedAccounts.jsx";
import { propList } from "../PropList/PropList.jsx";

import {
  Container,
  ContainerWrapperCard,
  ContainerCardRow_1,
  ContainerCardTopAvatarBg,
  ContainerCardTopAvatarDisableItem,
  ContainerCardRow_2,
  ContainerCardRow_2_Doc,
  ContainerCardRow_1_Doc,
  ContainerCardTopProfileInfoBg,
  ContainerCardTopProfileInfoName,
  ContainerCardTopProfileInfoActivator,
  ContainerCardTopProfileInfoLogName,
  ContainerCardTopProfileInfoFollows,
  ContainerCardTopProfileFollowUpWarpper,
  ContainerCardTopProfileFollowBtn,
  ContainerCardTopProfileUnFollowBtn,
  HashInfoModalWrapper,
  HashInfoModal,
  HashInfoModal_Top,
  HashInfoModal_Top_Row1,
  HashInfoModal_Top_Row1Item,
  HashInfoModal_Top_Row1Title,
  HashInfoModal_Top_Row1CloseBtn,
  HashInfoModal_Top_Row2,
  HashInfoModal_Top_Row2Links,
  HashInfoModal_Content,
  HashInfoModal_Content_Row1,
  HashInfoModal_Content_RowSerachWrapper,
  HashInfoModal_Content_RowSerachIcon,
  HashInfoModal_Content_RowSerachInput,
  HashInfoModal_Content_Row2,
  HashInfoModal_Content_Card,
} from "./style.js";

const storageKey = "Pofs_ID-0.1";

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
  const prefixes = ["Mr", "Ms", "Mrs", "Dr", "Prof", "Job", "Any"];
  for (const prefix of prefixes) {
    if (login.startsWith(prefix)) {
      const restOfLogin = login.slice(prefix.length);
      return `${prefix[0]}${restOfLogin[0] || ""}`.toUpperCase();
    }
  }

  const loginParts = login.split(/[\s_]+/);
  return loginParts.length > 1
    ? loginParts.map((part) => part[0].toUpperCase()).join("")
    : login.slice(0, 2).toUpperCase();
};

const units = [
  { divisor: 1e63, suffix: "V", title: "Vinton" },
  { divisor: 1e60, suffix: "Nov", title: "Novemdecillion" },
  { divisor: 1e57, suffix: "Octo", title: "Octodecillion" },
  { divisor: 1e54, suffix: "Sep", title: "Septendecillion" },
  { divisor: 1e51, suffix: "Sex", title: "Sexdecillion" },
  { divisor: 1e48, suffix: "Quin", title: "Quindecillion" },
  { divisor: 1e45, suffix: "Qua", title: "Quattuordecillion" },
  { divisor: 1e42, suffix: "Tre", title: "Tredecillion" },
  { divisor: 1e39, suffix: "Duo", title: "Duodecillion" },
  { divisor: 1e36, suffix: "U", title: "Undecillion" },
  { divisor: 1e33, suffix: "D", title: "Decillion" },
  { divisor: 1e30, suffix: "N", title: "Nonillion" },
  { divisor: 1e27, suffix: "Oc", title: "Octillion" },
  { divisor: 1e24, suffix: "Sp", title: "Septillion" },
  { divisor: 1e21, suffix: "S", title: "Sextillion" },
  { divisor: 1e18, suffix: "Qi", title: "Quintillion" },
  { divisor: 1e15, suffix: "Q", title: "Quadrillion" },
  { divisor: 1e12, suffix: "T", title: "Trillion" },
  { divisor: 1e9, suffix: "B", title: "Billion" },
  { divisor: 1e6, suffix: "M", title: "Million" },
  { divisor: 1e3, suffix: "K", title: "Thousand" },
];

const formatNumber = (num, divisor, suffix) => {
  const formattedNum = num / divisor;
  return Number.isInteger(formattedNum)
    ? formattedNum.toFixed(0) + suffix
    : formattedNum.toFixed(1) + suffix;
};

const formatWithUnits = (num) => {
  if (num < 1000) {
    return num.toString();
  }
  for (const { divisor, suffix } of units) {
    if (num >= divisor) {
      return formatNumber(num, divisor, suffix);
    }
  }
  return num.toString();
};

const formatTitle = (num, type) => {
  if (num < 1000) {
    return `${num} ${type}`;
  }

  const formattedNum = formatWithUnits(num);
  let fullTitle = "";

  for (const { suffix, title } of units) {
    if (formattedNum.includes(suffix)) {
      fullTitle = `${formattedNum.replace(suffix, "")} ${title}`;
      break;
    }
  }

  return fullTitle + (num === 1 ? ` ${type.slice(0, -1)}` : ` ${type}`);
};

function UserMe() {
  const location = useLocation();
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertText, setAlertText] = useState(""); // CLose
  const [userLogin, setUserLogin] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");
  const [imgSrc, setImgSrc] = useState("");
  const [imgActive, setImgActive] = useState(false);
  const [bannedActive, setBannedActive] = useState(false);
  const [userConfirmedGet, setUserConfirmedGet] = useState(false);
  const [userAccount, setUserAccount] = useState(null);
  const [userAccountProp, setUserAccountProp] = useState(null);
  const [userFollowers, setUserFollowers] = useState(0);
  const [userFollowing, setUserFollowing] = useState(0);
  const [userProp, setUserProp] = useState(0);
  const [userFollowersTitle, setUserFollowersTitle] = useState("");
  const [userFollowingTitle, setUserFollowingTitle] = useState("");
  const [userPropTitle, setUserPropTitle] = useState("");
  const [isFocusedSearch, setIsFocusedSearch] = useState(true);

  const [userInfoAllFollowers, setUserInfoAllFollowers] = useState();
  const [userInfoAllFollowing, setUserInfoAllFollowing] = useState();

  const [userProfileInfoModal, setUserProfileInfoModal] = useState(false);
  const [userProfileInfoModalTitle, setUserProfileInfoModalTitle] =
    useState("");
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const tab = queryParams.get("tab");

  useEffect(() => {
    storeEncryptedData(storageKey, accounts);
    const decryptedAccounts = retrieveDecryptedData(storageKey);

    let userName = "";
    if (location.pathname === "/user/me") {
      userName = atob(localStorage.getItem("you!Prof_Active_ID-1.1"));
    } else {
      const pathSegments = location.pathname.split("/");
      userName = pathSegments[pathSegments.length - 1];
    }

    const foundUserAccount = decryptedAccounts.find(
      (account) => account.userName === userName
    );
    setUserAccount(foundUserAccount);

    if (foundUserAccount) {
      handleUserAccount(foundUserAccount);
    }

    const foundUserProp = propList.find(
      (propList) => propList.userName === userName
    );
    setUserAccountProp(foundUserProp);

    if (foundUserProp) {
      handleUserProp(foundUserProp);
    }

    const userConfirmed = ConfirmedAccounts.some(
      (account) => account.name === userName
    );
    setUserConfirmedGet(userConfirmed);
  }, [location.pathname, accounts, ConfirmedAccounts, storageKey]);

  const handleUserProp = (userAccountProp) => {
    const { properties } = userAccountProp;

    const PropNum = properties?.length || 0;
    setUserProp(formatWithUnits(PropNum));
    setUserPropTitle(formatTitle(PropNum, "Properties"));
  };

  const handleUserAccount = (userAccount) => {
    const { login, img, banned, followers, following } = userAccount;

    setBannedActive(!!banned);

    setUserInfoAllFollowers(followers);
    setUserInfoAllFollowing(following);

    const followersNum = followers?.length || 0;
    const followingNum = following?.length || 0;

    setUserFollowers(formatWithUnits(followersNum));
    setUserFollowing(formatWithUnits(followingNum));
    setUserFollowersTitle(formatTitle(followersNum, "Followers"));
    setUserFollowingTitle(formatTitle(followingNum, "Following"));

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

  const getAbbreviation = (login) => {
    return login
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase();
  };

  const determineUserLoginAndColor = (login, abbreviation) => {
    const loginLowerCase = login.toLowerCase();
    const conditions = conditionsAll;

    for (const condition of conditions) {
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

  const copyLinkToClipboard = (e) => {
    const link = `http://${window.location.host}/${userAccount?.userName}`;
    navigator.clipboard
      .writeText(link)
      .then(() => {})
      .catch((err) => {
        console.error("Could not copy text: ", err);
      });
  };

  const hideAlert = () => {
    setAlertVisible(false);
  };

  useEffect(() => {
    const searchTab = tab;

    if (searchTab === "propertie") {
      setUserProfileInfoModal(true);
      setUserProfileInfoModalTitle("Propertie");
    } else if (searchTab === "followers") {
      setUserProfileInfoModal(true);
      setUserProfileInfoModalTitle("Followers");
    } else if (searchTab === "following") {
      setUserProfileInfoModal(true);
      setUserProfileInfoModalTitle("Following");
    } else {
      setUserProfileInfoModal(false);
    }

    document.body.style.overflowY = userProfileInfoModal ? "hidden" : "scroll";

    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, [location, userProfileInfoModal]);

  const backInfoModal = () => {
    navigate(location.pathname);
  };


  const MapAllInfoLocTab =
    tab === "following" ? userInfoAllFollowing : userInfoAllFollowers;

  const uniqueUserNames = new Set();
  const filteredNames = [];

  (MapAllInfoLocTab || []).forEach((name) => {
    if (!uniqueUserNames.has(name)) {
      uniqueUserNames.add(name);
      filteredNames.push(name);
    }
  });



  const MapAllInfoCard = filteredNames.map((name, index) => {
    const account = accounts.find((account) => account.userName === name);
    const login = account ? account.login : null;

    return login ? (
      <HashInfoModal_Content_Card key={index}>
        <Link to={`/${name}`}>
          {name} ({login})
        </Link>
      </HashInfoModal_Content_Card>
    ) : null;
  });

  const MapAllInfoResult =
    MapAllInfoCard.length > 0 ? MapAllInfoCard : <p>No results found.</p>;




  return (
    <>
      <Container>
        {userProfileInfoModal ? (
          <HashInfoModalWrapper>
            <HashInfoModal>
              <HashInfoModal_Top>
                <HashInfoModal_Top_Row1>
                  <HashInfoModal_Top_Row1Title>
                    {userProfileInfoModalTitle}
                  </HashInfoModal_Top_Row1Title>
                  <HashInfoModal_Top_Row1Item>
                    <HashInfoModal_Top_Row1CloseBtn onClick={backInfoModal}>
                      <i class="fa-solid fa-xmark">x</i>
                    </HashInfoModal_Top_Row1CloseBtn>
                  </HashInfoModal_Top_Row1Item>
                </HashInfoModal_Top_Row1>
                <HashInfoModal_Top_Row2>
                  <HashInfoModal_Top_Row2Links
                    onClick={() => navigate("?tab=propertie")}
                    style={{
                      borderColor:
                        tab === "propertie"
                          ? "var(--colorPrimary)"
                          : "transparent",
                      color:
                        tab === "propertie"
                          ? "var(--colorPrimary)"
                          : "var(--txtColor)",
                    }}
                    title={userPropTitle}
                  >
                    Propertie ({userProp})
                  </HashInfoModal_Top_Row2Links>
                  <HashInfoModal_Top_Row2Links
                    onClick={() => navigate("?tab=followers")}
                    style={{
                      borderColor:
                        tab === "followers"
                          ? "var(--colorPrimary)"
                          : "transparent",
                      color:
                        tab === "followers"
                          ? "var(--colorPrimary)"
                          : "var(--txtColor)",
                    }}
                    title={userFollowersTitle}
                  >
                    Followers ({userFollowers})
                  </HashInfoModal_Top_Row2Links>
                  <HashInfoModal_Top_Row2Links
                    onClick={() => navigate("?tab=following")}
                    style={{
                      borderColor:
                        tab === "following"
                          ? "var(--colorPrimary)"
                          : "transparent",
                      color:
                        tab === "following"
                          ? "var(--colorPrimary)"
                          : "var(--txtColor)",
                    }}
                    title={userFollowingTitle}
                  >
                    Following ({userFollowing})
                  </HashInfoModal_Top_Row2Links>
                </HashInfoModal_Top_Row2>
              </HashInfoModal_Top>
              <HashInfoModal_Content>
                <HashInfoModal_Content_Row1>
                  <HashInfoModal_Content_RowSerachWrapper>
                    <HashInfoModal_Content_RowSerachIcon
                      style={{
                        opacity: isFocusedSearch ? "1" : "0",
                        marginLeft: isFocusedSearch ? "15px" : "-5px",
                      }}
                    >
                      <i class="fa-solid fa-magnifying-glass"></i>
                    </HashInfoModal_Content_RowSerachIcon>
                    <HashInfoModal_Content_RowSerachInput
                      type="search"
                      placeholder="Search"
                      onFocus={() => setIsFocusedSearch(false)}
                      onBlur={() => setIsFocusedSearch(true)}
                    />
                  </HashInfoModal_Content_RowSerachWrapper>
                </HashInfoModal_Content_Row1>
                <HashInfoModal_Content_Row2>
                  {MapAllInfoResult}
                </HashInfoModal_Content_Row2>
              </HashInfoModal_Content>
            </HashInfoModal>
          </HashInfoModalWrapper>
        ) : (
          ""
        )}

        <ContainerWrapperCard>
          <ContainerCardRow_1>
            <ContainerCardRow_1_Doc>
              <ContainerCardTopAvatarBg
                style={{
                  backgroundColor:
                    imgActive || bannedActive ? "black" : backgroundColor,
                  backgroundImage: `url("${
                    bannedActive ? "../../../../public/assets/img/banned.jpg" : imgSrc
                  }")`,
                }}
              >
                {imgActive || bannedActive ? "" : userLogin}
                <ContainerCardTopAvatarDisableItem />
              </ContainerCardTopAvatarBg>
              <ContainerCardTopProfileInfoBg>
                <ContainerCardTopProfileInfoName
                  style={{
                    textDecoration: bannedActive
                      ? "line-through solid red"
                      : "none",
                  }}
                >
                  {userAccount?.login}
                  {userConfirmedGet && (
                    <ContainerCardTopProfileInfoActivator title="Confirmed">
                      <i className="fa-solid fa-circle-check"></i>
                    </ContainerCardTopProfileInfoActivator>
                  )}
                </ContainerCardTopProfileInfoName>

                <ContainerCardTopProfileInfoLogName>
                  <Link
                    title={`${userAccount?.userName}`}
                    id="ContainerCardTopProfileInfoLogNameLink"
                    to={`/${userAccount?.userName}`}
                    onClick={copyLinkToClipboard}
                    onContextMenu={copyLinkToClipboard}
                    onCopy={copyLinkToClipboard}
                  >
                    {userAccount?.userName}
                  </Link>
                </ContainerCardTopProfileInfoLogName>
                <ContainerCardTopProfileInfoFollows>
                  <Link
                    to={"?tab=propertie"}
                    id="ContainerCardTopProfileInfoFollowsLink"
                    title={userPropTitle}
                  >
                    {userProp} Propertie
                  </Link>{" "}
                  <span>•</span>
                  <Link
                    to={"?tab=followers"}
                    id="ContainerCardTopProfileInfoFollowsLink"
                    title={userFollowersTitle}
                  >
                    {userFollowers} Followers
                  </Link>{" "}
                  <span>•</span>
                  <Link
                    to={"?tab=following"}
                    id="ContainerCardTopProfileInfoFollowsLink"
                    title={userFollowingTitle}
                  >
                    {userFollowing} Following
                  </Link>
                </ContainerCardTopProfileInfoFollows>

                <ContainerCardTopProfileFollowUpWarpper>
                  <ContainerCardTopProfileFollowBtn>
                    Follow
                  </ContainerCardTopProfileFollowBtn>
                </ContainerCardTopProfileFollowUpWarpper>
              </ContainerCardTopProfileInfoBg>
            </ContainerCardRow_1_Doc>
          </ContainerCardRow_1>

          <ContainerCardRow_2>
            <ContainerCardRow_2_Doc></ContainerCardRow_2_Doc>
          </ContainerCardRow_2>
        </ContainerWrapperCard>
      </Container>
      <Footer />
      <Alert showAlert={alertVisible} showText={alertText} onHide={hideAlert} />
    </>
  );
}

export default UserMe;
