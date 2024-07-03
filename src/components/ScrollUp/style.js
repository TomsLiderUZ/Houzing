import styled from "styled-components";

export const ScrollUpButtonWrapper = styled.button`
  width: 45px;
  height: 45px;
  background-color: var(--colorPrimary);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  position: fixed;
  right: 0;
  bottom: 0;
  margin-right: ${(props) => (props.isVisible ? "12px" : "-50px")};
  margin-bottom: 11px;
  z-index: 9999999;
  cursor: pointer;
  transition: opacity 0.2s linear, transform 0.1s linear, margin 0.2s linear;
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  border: 0;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
  }
`;

export const ScrollUpButtonIcon = styled.img`
  width: auto;
  height: auto;
`;
