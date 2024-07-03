import styled from "styled-components";

export const CardCaruselUpTopBg = styled.div`
  width: 100%;
  min-height: 76px;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-wrap: wrap;
  row-gap: 8px;
`;

export const CardCaruselUpTopTitle = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 36px;
  height: max-content;
  font-size: 28px;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--bgWrapper);
`;

export const CardCaruselUpTopAbout = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 44px;
  box-sizing: border-box;
  min-height: 24px;
  height: max-content;
  font-size: 16px;
  font-weight: 400;
  color: var(--txtColor);
`;