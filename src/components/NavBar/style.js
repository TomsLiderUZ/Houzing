import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: max-content;
  padding: 64px 0 0 0;
  overflow: hidden;
  position: absolute;
`;

export const NavWrapper = styled.div`
  width: 100%;
  height: 64px;
  background-color: var(--bgWrapper);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  position: fixed;
  z-index: 999999;
  top: 0;
`;

export const NavItemsBgLogo = styled.div`
  width: 28%;
  display: flex;
  justify-content: left;
  align-items: center;
  box-sizing: border-box;
  padding: 0 0 0 130px;
`;

export const NavItemsBgLink = styled.div`
  width: 35%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const NavItemsBgJoin = styled.div`
  width: 25%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
  padding: 0 130px 0 0;
`;

export const NavItemLinks = styled(Link)`
  width: max-content;
  height: max-content;
  padding: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  color: white;
  border-bottom: 2px solid transparent;
  transition: all 0.2s linear;

  &:hover {
    border-bottom: 2px solid white;
  }
`;

export const NavItemsJoinBtnBg = styled(Link)`
  width: 120px;
  height: 44px;
  border-radius: 2px;
  border: 1px solid white;
  font-size: 14px;
  font-weight: 400;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s linear;

  &:hover {
    background-color: white;
    color: #0D263B;
  }
`;
