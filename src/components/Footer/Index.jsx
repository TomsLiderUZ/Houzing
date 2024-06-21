import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Index() {
  return (
    <footer className="footerWrapper">
      <div className="footerTopItemsWrapper">
        <div className="footerTopItemRow">
          <p className="footerTopItemRowTitleText">Contact Us</p>
          <div className="footerTopItemRowGapBg">
            <div className="footerTopItemRowGapIcon">
              <img src="./src/assets/icons/map.svg" alt="icon" />
            </div>
            <p className="footerTopItemRowGapText">
              329 Queensberry Street, North
              <br />
              Melbourne VIC 3051, Australia.
            </p>
          </div>
          <div className="footerTopItemRowGapBg">
            <div className="footerTopItemRowGapIcon">
              <img src="./src/assets/icons/phone.svg" alt="icon" />
            </div>
            <p className="footerTopItemRowGapText">23 456 7890</p>
          </div>
          <div className="footerTopItemRowGapBg">
            <div className="footerTopItemRowGapIcon">
              <img src="./src/assets/icons/email.svg" alt="icon" />
            </div>
            <p className="footerTopItemRowGapText">support@houzing.com</p>
          </div>

          <div className="footerTopItemRowLinksBg">
            <a href="/" className="footerTopItemRowLinkCard">
              <img src="./src/assets/icons/facebook.svg" alt="icon" />
            </a>
            <a href="/" className="footerTopItemRowLinkCard">
              <img src="./src/assets/icons/twitter.svg" alt="icon" />
            </a>
            <a href="/" className="footerTopItemRowLinkCard">
              <img src="./src/assets/icons/instagram.svg" alt="icon" />
            </a>
            <a href="/" className="footerTopItemRowLinkCard">
              <img src="./src/assets/icons/linkedin.svg" alt="icon" />
            </a>
          </div>
        </div>
        <div className="footerTopItemRow">
          <p className="footerTopItemRowTitleText">Discover</p>
          <div className="footerTopItemRowGapBg">
            <p className="footerTopItemRowGapText">Chicago</p>
          </div>
          <div className="footerTopItemRowGapBg">
            <p className="footerTopItemRowGapText">Los Angeles</p>
          </div>
          <div className="footerTopItemRowGapBg">
            <p className="footerTopItemRowGapText">Miami</p>
          </div>
          <div className="footerTopItemRowGapBg">
            <p className="footerTopItemRowGapText">New York</p>
          </div>
        </div>
        <div className="footerTopItemRow">
          <p className="footerTopItemRowTitleText">Lists by Category</p>
          <div className="footerTopItemRowGapBg">
            <p className="footerTopItemRowGapText">Apartments</p>
          </div>
          <div className="footerTopItemRowGapBg">
            <p className="footerTopItemRowGapText">Condos</p>
          </div>
          <div className="footerTopItemRowGapBg">
            <p className="footerTopItemRowGapText">Houses</p>
          </div>
          <div className="footerTopItemRowGapBg">
            <p className="footerTopItemRowGapText">Offices</p>
          </div>
          <div className="footerTopItemRowGapBg">
            <p className="footerTopItemRowGapText">Retail</p>
          </div>
          <div className="footerTopItemRowGapBg">
            <p className="footerTopItemRowGapText">Villas</p>
          </div>
        </div>
        <div className="footerTopItemRow">
          <p className="footerTopItemRowTitleText">Lists by Category</p>
          <div className="footerTopItemRowGapBg">
            <p className="footerTopItemRowGapText">About Us</p>
          </div>
          <div className="footerTopItemRowGapBg">
            <p className="footerTopItemRowGapText">Terms & Conditions</p>
          </div>
          <div className="footerTopItemRowGapBg">
            <p className="footerTopItemRowGapText">Support Center</p>
          </div>
          <div className="footerTopItemRowGapBg">
            <p className="footerTopItemRowGapText">Contact Us</p>
          </div>
        </div>
      </div>
      <div className="footerBottomItemsWrapper">
        <div className="footerBottomItemLogo">
          <Link to="/">
            <img src="./src/assets/icons/logo.png" alt="logo" />
          </Link>
        </div>
        <div className="footerBottomItemTextBg">
          <p className="footerBottomItemText">
            Copyright © 2021 CreativeLayers. All Right Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Index;
