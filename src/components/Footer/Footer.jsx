import React from 'react';
import { Link } from 'react-router-dom';
import {
  FooterWrapper,
  FooterTopItemsWrapper,
  FooterTopItemRow,
  FooterTopItemRowTitleText,
  FooterTopItemRowGapBg,
  FooterTopItemRowGapText,
  FooterTopItemRowLinksBg,
  FooterTopItemRowLinkCard,
  FooterRowLine,
  FooterRowLineItem,
  FooterBottomItemsWrapper,
  FooterBottomItemLogo,
  FooterBottomItemTextBg,
  FooterBottomItemText,
} from './style';

function Index() {
  return (
    <FooterWrapper>
      <FooterTopItemsWrapper>
        <FooterTopItemRow>
          <FooterTopItemRowTitleText>Contact Us</FooterTopItemRowTitleText>
          <FooterTopItemRowGapBg>
            <div className="footerTopItemRowGapIcon">
              <img src="./src/assets/icons/map.svg" alt="icon" />
            </div>
            <FooterTopItemRowGapText>
              329 Queensberry Street, North
              <br />
              Melbourne VIC 3051, Australia.
            </FooterTopItemRowGapText>
          </FooterTopItemRowGapBg>
          <FooterTopItemRowGapBg>
            <div className="footerTopItemRowGapIcon">
              <img src="./src/assets/icons/phone.svg" alt="icon" />
            </div>
            <FooterTopItemRowGapText>23 456 7890</FooterTopItemRowGapText>
          </FooterTopItemRowGapBg>
          <FooterTopItemRowGapBg>
            <div className="footerTopItemRowGapIcon">
              <img src="./src/assets/icons/email.svg" alt="icon" />
            </div>
            <FooterTopItemRowGapText>support@houzing.com</FooterTopItemRowGapText>
          </FooterTopItemRowGapBg>

          <FooterTopItemRowLinksBg>
            <FooterTopItemRowLinkCard href="/">
              <img src="./src/assets/icons/facebook.svg" alt="icon" />
            </FooterTopItemRowLinkCard>
            <FooterTopItemRowLinkCard href="/">
              <img src="./src/assets/icons/twitter.svg" alt="icon" />
            </FooterTopItemRowLinkCard>
            <FooterTopItemRowLinkCard href="/">
              <img src="./src/assets/icons/instagram.svg" alt="icon" />
            </FooterTopItemRowLinkCard>
            <FooterTopItemRowLinkCard href="/">
              <img src="./src/assets/icons/linkedin.svg" alt="icon" />
            </FooterTopItemRowLinkCard>
          </FooterTopItemRowLinksBg>
        </FooterTopItemRow>
        <FooterTopItemRow>
          <FooterTopItemRowTitleText>Discover</FooterTopItemRowTitleText>
          <FooterTopItemRowGapBg>
            <FooterTopItemRowGapText>Chicago</FooterTopItemRowGapText>
          </FooterTopItemRowGapBg>
          <FooterTopItemRowGapBg>
            <FooterTopItemRowGapText>Los Angeles</FooterTopItemRowGapText>
          </FooterTopItemRowGapBg>
          <FooterTopItemRowGapBg>
            <FooterTopItemRowGapText>Miami</FooterTopItemRowGapText>
          </FooterTopItemRowGapBg>
          <FooterTopItemRowGapBg>
            <FooterTopItemRowGapText>New York</FooterTopItemRowGapText>
          </FooterTopItemRowGapBg>
        </FooterTopItemRow>
        <FooterTopItemRow>
          <FooterTopItemRowTitleText>Lists by Category</FooterTopItemRowTitleText>
          <FooterTopItemRowGapBg>
            <FooterTopItemRowGapText>Apartments</FooterTopItemRowGapText>
          </FooterTopItemRowGapBg>
          <FooterTopItemRowGapBg>
            <FooterTopItemRowGapText>Condos</FooterTopItemRowGapText>
          </FooterTopItemRowGapBg>
          <FooterTopItemRowGapBg>
            <FooterTopItemRowGapText>Houses</FooterTopItemRowGapText>
          </FooterTopItemRowGapBg>
          <FooterTopItemRowGapBg>
            <FooterTopItemRowGapText>Offices</FooterTopItemRowGapText>
          </FooterTopItemRowGapBg>
          <FooterTopItemRowGapBg>
            <FooterTopItemRowGapText>Retail</FooterTopItemRowGapText>
          </FooterTopItemRowGapBg>
          <FooterTopItemRowGapBg>
            <FooterTopItemRowGapText>Villas</FooterTopItemRowGapText>
          </FooterTopItemRowGapBg>
        </FooterTopItemRow>
        <FooterTopItemRow>
          <FooterTopItemRowTitleText>Lists by Category</FooterTopItemRowTitleText>
          <FooterTopItemRowGapBg>
            <FooterTopItemRowGapText>About Us</FooterTopItemRowGapText>
          </FooterTopItemRowGapBg>
          <FooterTopItemRowGapBg>
            <FooterTopItemRowGapText>Terms & Conditions</FooterTopItemRowGapText>
          </FooterTopItemRowGapBg>
          <FooterTopItemRowGapBg>
            <FooterTopItemRowGapText>Support Center</FooterTopItemRowGapText>
          </FooterTopItemRowGapBg>
          <FooterTopItemRowGapBg>
            <FooterTopItemRowGapText>Contact Us</FooterTopItemRowGapText>
          </FooterTopItemRowGapBg>
        </FooterTopItemRow>
      </FooterTopItemsWrapper>
      <FooterRowLine>
        <FooterRowLineItem></FooterRowLineItem>
      </FooterRowLine>
      <FooterBottomItemsWrapper>
        <FooterBottomItemLogo>
          <Link to="/">
            <img src="./src/assets/icons/logo.png" alt="logo" />
          </Link>
        </FooterBottomItemLogo>
        <FooterBottomItemTextBg>
          <FooterBottomItemText>
            Copyright © 2021 CreativeLayers. All Right Reserved.
          </FooterBottomItemText>
        </FooterBottomItemTextBg>
      </FooterBottomItemsWrapper>
    </FooterWrapper>
  );
}

export default Index;
