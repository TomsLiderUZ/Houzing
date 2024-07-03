import styled from "styled-components";

export const PropContentWrapper = styled.div`
  width: 100%;
  height: max-content;
`;

export const PropContents = styled.div`
  width: 100%;
  min-height: 100vh;
  height: max-content;
  padding: 64px 0 0 0;
  box-sizing: border-box;
  overflow: hidden;
`;

export const PropContentCardsFilterBg = styled.div`
  width: 100%;
  height: 26px;
  display: flex;
  margin-bottom: 16px;
  box-sizing: border-box;
  padding: 0 105px;
  margin-top: 64px;
  align-items: end;
  justify-content: center;

  @media only screen and (max-width: 759px) {
    display: none;
  }
`;

export const PropContentAllCardsNumber = styled.p`
  width: max-content;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 5px;
  color: var(--txtColor);
  font-size: 14px;
  font-weight: 400;
  padding: 6px 0 0 0;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  margin-left: 110px;
`;

export const PropContentAllCardsNumberBold = styled.span`
  color: var(--bgWrapper) !important;
  font-size: 15px;
`;

export const PropContentCardsFilterOptionsWrapper = styled.div`
  width: max-content;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: end;
  position: absolute;
  right: 0;
  margin-right: 110px;
`;

export const PropContentCardsFilterSelectWrapper = styled.div`
  width: max-content;
  height: 100%;
  display: flex;
  justify-content: right;
  align-items: end;
  border-bottom: 2px solid #e6e9ec;
  box-sizing: border-box;
  padding: 0 0 4px 0;
  gap: 5px;
  font-size: 14px;
  font-weight: 400;
`;

export const PropContentCardsFilterSelectTitle = styled.p`
  color: var(--bgWrapper);
  font-size: 15px;
`;

export const PropContentCardsFilterSelectBg = styled.select`
  display: flex;
  justify-content: left;
  align-items: end;
  border: 0;
  padding: 0 20px 0 0;
  outline: 0;
`;

export const PropContentShowMoreBg = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 49px;
  margin-bottom: 96px;
`;

export const PropContentShowMoreButton = styled.div`
  width: 250px;
  height: 44px;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--colorPrimary);
  cursor: pointer;
  color: white;
  transition: all 0.2s linear;

  &:hover {
    background-color: var(--bgWrapper);
  }
`;

export const PropContentCardsWrapper = styled.div`
  width: max-content;
  max-width: 1180px;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-wrap: wrap;
  gap: 20px;
  row-gap: 20px;
  box-sizing: border-box;
`;


export const PropContentCardsWrapperAllMin = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: start;

  @media only screen and (max-width: 759px) {
    margin-top: 32px;
  }
`;
