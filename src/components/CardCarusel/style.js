import styled from 'styled-components';

export const CardCaruselUpBg = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-wrap: wrap;
  margin-top: 82px;
`;

export const CardCaruselUpBottomBg = styled.div`
  width: 100%;
  height: 429px;
  margin-top: 28px;
  display: flex;
  justify-content: left;
  align-items: start;
`;

export const CardCaruselUpBottomElement_BtnBG = styled.div`
  height: 100%;
  width: max-content;
  padding: 0 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardCaruselUpBottomElementButton = styled.div`
  width: 45px;
  height: 45px;
  border: 1px solid #e6e9ec;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5000px;
  cursor: pointer;
  transition: all 0.2s linear;
  box-shadow: 0px 8px 15px 0px #0000000f, 0px 7px 46px 0px #0000000f, 0px 20px 38px 0px #0000000f;

  &:hover {
    background-color: #00000028;
  }
`;

export const CardCaruselUpBottomElement_Cards = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const CardCaruselUpNuberBtmsWrapper = styled.div`
  width: 100%;
  height: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 13px;
  margin-top: 32px;
`;

export const CardCaruselUpNuberButtonItemBg = styled.div`
  width: 8px;
  height: 8px;
  background-color: var(--colorPrimary);
  border-radius: 5000px;
  cursor: pointer;
`;
