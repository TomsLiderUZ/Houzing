import styled from 'styled-components';

export const UsersCarouselWrapper = styled.div`
  width: 100%;
  height: 482px;
  background-color: var(--bgContent);
  margin-top: 48px;
  box-sizing: border-box;
  padding: 48px 0 0 0;
`;

export const UsersCarouselItemsBg = styled.div`
  width: 100%;
  height: max-content;
  margin-top: 32px;
  display: flex;
  justify-content: left;
  align-items: start;
`;

export const UsersCarouselItemRow1 = styled.div`
  width: max-content;
  height: 286px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UsersCarouselItemRow2 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const UsersCarouselItemRowCardWrapper = styled.div`
  width: 360px;
  height: 286px;
`;

export const UsersCarouselItemRowCardTopBg = styled.div`
  width: 100%;
  height: 197px;
  border-radius: 3px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: start;
  text-align: center;
  box-sizing: border-box;
  padding: 40px;
  font-size: 16px;
  font-weight: 400;
  color: var(--txtColor);
  box-shadow: 0px 10px 50px 0px #0d263b1a;
`;

export const UsersCarouselItemRowCardAvatar = styled.div`
  position: absolute;
  width: max-content;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
  box-shadow: 0px 0px 10px 0px #0d263b33;
  border-radius: 50000px;
  margin-top: 176px;
  margin-left: 169px;
`;

export const UsersCarouselItemRowCardBottomBg = styled.div`
  width: 100%;
  height: max-content;
  text-align: center;
`;

export const UsersCarouselItemRowCardBottomNameBg = styled.div`
  width: 100%;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 37px;
  font-size: 16px;
  font-weight: 600;
  color: var(--bgWrapper);
`;

export const UsersCarouselItemRowCardBottomRankBg = styled.div`
  width: 100%;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4px;
  font-size: 16px;
  font-weight: 400;
  color: var(--txtColor);
`;

export const CardCarouselUpBottomElementButton = styled.div`
  width: 45px;
  height: 45px;
  border: 1px solid #e6e9ec;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5000px;
  cursor: pointer;
  transition: all 0.2s linear;
  box-shadow: 0px 8px 15px 0px #0000000f, 0px 7px 46px 0px #0000000f,
    0px 20px 38px 0px #0000000f;

  &:hover {
    background-color: #00000028;
  }
`;

export const CardCarouselUpBottomElementBtnBG = styled.div`
  height: 100%;
  width: max-content;
  padding: 0 32px;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
