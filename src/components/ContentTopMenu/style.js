import styled from 'styled-components';

export const ContentTopMenuWrapper = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  position: ${({ topMenuSt1 }) => topMenuSt1};
  top: ${({ topMenuSt2 }) => topMenuSt2};
`;

export const ContentTopMenuContainer = styled.div`
  width: 100%;
  min-height: 64px;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 0 130px 0 130px;
  position: relative;
  z-index: 900;

  @media only screen and (max-width: 980px) {
    padding: 0 50px 0 50px;
  }

  @media only screen and (max-width: 750px) {
    flex-wrap: wrap;
    width: 90%;
    row-gap: 24px;
    padding: 24px;
    border-radius: 5px;
    background-color: white;
  }
`;

export const ContentTopMenuTitleBar = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  width: 100%;
  height: 44px;
  box-sizing: border-box;
  padding: 0 0 0 15px;
  border: 1px solid #e6e9ec;
  border-radius: 2px;
  margin-right: 20px;

  @media only screen and (max-width: 750px) {
    width: 100%;
    margin: 0;
    border-color: transparent;
    border-bottom-color: #e6e9ec;
  }
`;

export const ContentTopMenuTitleBarInp = styled.input`
  width: 100%;
  height: 100%;
  color: var(--bgWrapper);
  font-size: 14px;
  font-weight: 400;
  box-sizing: border-box;
  padding: 0 10px 0 9px;
  outline: 0;
  border: 0;
  background-color: transparent;
`;

export const ContentTopMenuBtnWrapper = styled.div`
  width: max-content;
  height: 100%;
  display: flex;
  justify-content: right;
  align-items: center;
  box-sizing: border-box;
  gap: 20px;

  @media only screen and (max-width: 750px) {
    width: 100%;
    justify-content: center;
  }
`;

export const ContentTopMenuButton = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.4s linear;

  &.ContentTopMenuButton_1 {
    width: 131px;
    height: 44px;
    border-radius: 2px;
    border: 1px solid #e6e9ec;
    color: var(--bgWrapper);
    font-size: 14px;
    font-weight: 400;
  }

  &.ContentTopMenuButton_2 {
    width: 180px;
    height: 44px;
    border-radius: 2px;
    border: 1px solid var(--colorPrimary);
    background-color: var(--colorPrimary);
    color: white;
    font-size: 14px;
    font-weight: 400;

    &:hover {
      background-color: var(--bgWrapper);
      border-color: var(--bgWrapper);
      color: white;
    }
  }

  &:hover {
    background-color: var(--bgWrapper);
    border-color: var(--bgWrapper);
    /* color: white; */
  }

  @media only screen and (max-width: 750px) {
    width: 100%;
  }
`;

export const ModalWrapper = styled.div`
  position: absolute;
  z-index: 500;
  width: 920px;
  height: 409px;
  border-radius: 5px;
  background-color: white;
  margin-right: 130px;
  margin-top: 74px;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-wrap: wrap;
  overflow: hidden;
  transition: all 0.4s linear;

  @media only screen and (max-width: 750px) {
    width: 100%;
    margin: 0;
    border-radius: 5px;
    background-color: white;
  }
`;

export const ModalTopContent = styled.div`
  width: 100%;
  height: 325px;
  box-sizing: border-box;
  padding: 20px 0 0 30px;
`;

export const ModalTopContentRow = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: left;
  align-items: start;
  flex-wrap: wrap;
`;

export const ModalTopContentRowTitleBg = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  color: var(--bgWrapper);
`;

export const ModalTopContentRowInpsBg = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: left;
  align-items: center;
  margin-bottom: 10px;
  gap: 20px;
`;

export const ModalTopContentRowInputItem = styled.input`
  width: 200px;
  height: 44px;
  border-radius: 2px;
  border: 1px solid #e6e9ec;
  color: var(--bgWrapper);
  font-size: 14px;
  font-weight: 400;
  box-sizing: border-box;
  padding: 0 0 0 16px;
  text-align: left;
`;

export const ModalBottomContent = styled.div`
  width: 100%;
  height: 84px;
  background-color: #f6f8f9;
  border-top: 1px solid #e6e9ec;
  display: flex;
  justify-content: right;
  align-items: center;
  box-sizing: border-box;
  padding: 0 30px 0 0;
`;

export const ModalBottomContentButton = styled.div`
  width: 128px;
  height: 44px;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  transition: all 0.2s linear;

  &.A {
    color: var(--bgWrapper);
    border: 1px solid var(--bgWrapper);
  }

  &.B {
    color: white;
    border: 1px solid var(--colorPrimary);
    background-color: var(--colorPrimary);
    margin-left: 20px;

    &:hover {
      background-color: var(--bgWrapper);
      border-color: var(--bgWrapper);
      color: white;
    }
  }
`;

