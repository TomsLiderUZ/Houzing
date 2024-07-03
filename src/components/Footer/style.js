import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: 100%;
  min-height: 417px;
  height: max-content;
  background-color: var(--bgWrapper);
  display: flex;
  justify-content: left;
  align-items: start;
  flex-wrap: wrap;
`;

export const FooterBottomItemsWrapper = styled.div`
  width: 100%;
  min-height: 68px;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 16px 0 16px 35px;
  box-sizing: border-box;

  @media only screen and (max-width: 1361px) {
    justify-content: flex-start;
  }
`;

export const FooterRowLine = styled.div`
  width: 100%;
  height: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterRowLineItem = styled.div`
  width: 1440px;
  height: 100%;
  background-color: white;
`;

export const FooterBottomItemLogo = styled.div`
  width: max-content;
  height: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
  box-sizing: border-box;
  margin-right: 701px;

  @media only screen and (max-width: 1361px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    margin-top: 24px;
  }
`;

export const FooterBottomItemTextBg = styled.div`
  width: max-content;
  height: 100%;
  display: flex;
  justify-content: right;
  align-items: center;
  box-sizing: border-box;

  @media only screen and (max-width: 1361px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 24px;
    margin-bottom: 24px;
    padding: 0 70px;
    box-sizing: border-box;
  }
`;

export const FooterBottomItemText = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: white;
  text-align: center;
`;

export const FooterTopItemsWrapper = styled.div`
  width: 100%;
  min-height: 348px;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-wrap: wrap;
  gap: 172px;
  box-sizing: border-box;
  padding: 48px 0 0 0;
  row-gap: 48px;

  @media only screen and (max-width: 1396px) {
    padding: 48px 95px 48px 130px;
    justify-content: left;
  }

  @media only screen and (max-width: 980px) {
    padding: 48px 95px 48px 50px;
    justify-content: left;
  }

  @media only screen and (max-width: 750px) {
    padding: 48px 64px 48px 16px;
  }
`;

export const FooterTopItemRow = styled.div`
  width: max-content;
  height: max-content;
`;

export const FooterTopItemRowTitleText = styled.p`
  width: max-content;
  height: 24px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 32px;
`;

export const FooterTopItemRowGapBg = styled.div`
  width: max-content;
  height: max-content;
  display: flex;
  justify-content: left;
  align-items: start;
  gap: 22px;
  margin-bottom: 20px;
`;

export const FooterTopItemRowGapText = styled.p`
  color: white;
  font-size: 14px;
  font-weight: 400;
`;

export const FooterTopItemRowLinksBg = styled.div`
  width: max-content;
  height: max-content;
  display: flex;
  justify-content: left;
  align-items: start;
  gap: 11px;
  margin-top: 12px;
  margin-left: -12px;
`;

export const FooterTopItemRowLinkCard = styled.a`
  width: 36px;
  height: 36px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s linear;

  img {
    width: auto;
    height: auto;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  &:active {
    background-color: var(--colorPrimary);
  }
`;
