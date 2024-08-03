import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 90vh;
  height: max-content;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-wrap: wrap;
  padding: 64px 8px;
  box-sizing: border-box;
`;

export const ContainerMine = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 50px;
`;

export const ContainerNavigateWrapper = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: start;
`;

export const ContainerNavigateLinksCard = styled.div`
  width: 580px;
  height: max-content;
  display: flex;
  justify-content: left;
  align-items: start;
  padding: 0px 30px;
  box-sizing: border-box;
  gap: 20px;
`;

export const ContainerNavigateLink = styled.div`
  width: max-content;
  height: 30px;

  a {
    cursor: pointer;
    color: var(--bgWrapper);
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
    border-bottom: ${(props) => props.active ? "2px solid var(--colorPrimary)" : "0"};
    color: ${(props) => props.active ? "var(--colorPrimary)" : "var(--bgWrapper)"};
  }
`;

export const ContainerCard = styled.div`
  width: 580px;
  /* min-height: 376px; */
  height: max-content;
  border: 1px solid #e6e9ec;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  padding: 24px 30px 48px 30px;
  box-sizing: border-box;
`;

export const ContainerCardTitle = styled.h1`
  width: 100%;
  height: max-content;
  font-size: 18px;
  font-weight: 600;
  text-align: left;
  margin-bottom: 54px;
  color: var(--bgWrapper);
`;

export const ContainerCardInpsWrapper = styled.div`
  width: 100%;
  height: max-content;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
`;

export const ContainerCardInpLabel = styled.label`
  width: 100%;
  height: max-content;
  position: relative;
`;

export const ContainerCardInpLabelText = styled.p`
  width: max-content;
  height: max-content;
  font-size: 14px;
  position: absolute;
  transition: margin-top 0.2s, color 0.2s linear;
  margin-top: ${(props) => (props.isFocused ? "-24px" : "0")};
  color: ${(props) => (props.isFocused ? "var(--bgWrapper)" : "var(--txtColor)")};
  font-weight: ${(props) => (props.isFocused ? "600" : "400")};
`;

export const ContainerCardInput = styled.input`
  width: 100%;
  height: 28px;
  text-align: left;
  border: 0;
  outline: 0;
  border-bottom: 2px solid #e6e9ec;
  font-size: 14px;
  font-weight: 400;
  color: var(--txtColor);

  &:focus {
    border-bottom: 2px solid var(--colorPrimary);
    color: var(--bgWrapper);
  }

  &.error {
    border-bottom: 2px solid red;
    transition: border-color 0.5s;
  }
`;

export const ContainerCardSelect = styled.select`
  width: 100%;
  height: 28px;
  text-align: left;
  border: 0;
  outline: 0;
  border-bottom: 2px solid #e6e9ec;
  font-size: 14px;
  font-weight: 400;
  color: var(--txtColor);

  &:focus {
    border-bottom: 2px solid var(--colorPrimary);
    color: var(--bgWrapper);
  }

  &.error {
    border-bottom: 2px solid red;
    transition: border-color 0.5s;
  }
`;

export const ContainerCardSubButton = styled.button`
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 33px;
  border-radius: 2px;
  background-color: var(--colorPrimary);
  color: white;
  font-size: 14px;
  font-weight: 400;
  transition: all 0.2s linear;
  cursor: pointer;

  &:hover {
    background-color: var(--bgWrapper);
  }
`;








