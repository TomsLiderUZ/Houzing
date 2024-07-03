import styled from "styled-components";

export const AlertUpWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100.2%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.795);
  backdrop-filter: blur(2px);
  display: ${({ showAlertStyle1 }) => showAlertStyle1};
  justify-content: center;
  align-items: center;
  z-index: 9999999999999;
  opacity: ${({ showAlertStyle2 }) => showAlertStyle2};
  transition: all 0.1s linear;
`;

export const AlertBox = styled.div`
  width: max-content;
  height: max-content;
  background-color: white;
  padding: 20px;
  border: 1px solid #b4b4b4;
  border-radius: 5px;
  max-width: 400px;
  width: 90%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.356);
  margin-top: ${({ marginTop }) => marginTop};
  transition: all 0.1s linear;
  position: absolute;
  z-index: 999;
`;

export const AlertBoxTextBg = styled.div`
  width: 100%;
  height: max-content;
  max-height: 300px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    border: 1px solid rgb(0, 0, 0);
    border-radius: 10px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--txtColor); /* Make sure to define --txtColor */
    transition: 1s all;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    cursor: pointer;
    background: var(--colorPrimary); /* Make sure to define --colorPrimary */
  }
`;

export const AlertBoxText = styled.p`
  width: 100%;
  height: max-content;
  font-size: 17px;
  color: black;
  font-weight: 500;
  display: flex;
  justify-content: left;
  align-items: start;
  line-height: 21px;
`;

export const AlertBoxBtnBg = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: right;
  align-items: start;
  margin-top: 40px;
`;

export const AlertBoxButton = styled.button`
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--colorPrimary); /* Make sure to define --colorPrimary */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 15px;
  letter-spacing: 1px;
  transition: all 0.1s linear;

  &:hover {
    background-color: var(--bgWrapper); /* Make sure to define --bgWrapper */
  }
`;
